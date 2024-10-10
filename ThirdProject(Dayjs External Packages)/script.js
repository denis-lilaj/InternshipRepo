// Load Day.js plugins
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

// Function to update the time display
function updateTime(timezone) {
    const timeDisplay = document.getElementById('timeDisplay');
    let currentTime;

    if (timezone === 'local') {
        currentTime = dayjs();
    } else {
        currentTime = dayjs().tz(timezone);
    }

    timeDisplay.innerText = currentTime.format('YYYY-MM-DD HH:mm:ss');
}

// Initialize the current time on page load
document.addEventListener('DOMContentLoaded', () => {
    updateTime('local'); // Start with local time
    setInterval(() => {
        const timezoneInput = document.getElementById('timezoneInput').value;
        updateTime(timezoneInput || 'local');
    }, 1000);
});

// Modal setup
document.getElementById('timezoneButton').addEventListener('click', () => {
    document.getElementById('timezoneInput').value = ''; // Clear input field
    MicroModal.show('timezoneModal');
});

document.getElementById('confirmTimezone').addEventListener('click', () => {
    const selectedTimezone = document.getElementById('timezoneInput').value;
    updateTime(selectedTimezone);
    MicroModal.close('timezoneModal');
});

// Close modal on ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        MicroModal.close('timezoneModal');
    }
});
