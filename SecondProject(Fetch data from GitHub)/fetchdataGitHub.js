var form = document.getElementById('form');
const paragraph = document.querySelectorAll('p');
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
});

document.getElementById("SendUsername").addEventListener('click', async function() {
    var input = form.firstElementChild.value;
    var gitData = await returnGitData(input);
    var gitRepo = await returnGitReposInfo(input);
    console.log(gitData);
    console.log(gitRepo);


var count = 0;

paragraph.forEach((element) => {
  console.log(count);
    if (count === 0) {
        element.innerHTML = "User Info:";
    } else if (count === 1) {
        element.innerHTML = `<img src="${gitData.avatar_url}" alt="User Avatar" style="width:100px;height:auto;">`;
    } else if (count === 2) {
        element.innerHTML = `Username: ${gitData.login}`;
    } else if (count === 3) {
        element.innerHTML = `Followers: ${gitData.followers}`;
    } else if (count === 4) {
        if (gitRepo.length > 0) {
            const reposList = gitRepo.map(repo => `<li><a href="${repo.url}" target="_blank">${repo.name}</a> - Stars: ${repo.stars}</li>`).join('');
            element.innerHTML = `<ul>${reposList}</ul>`;
        } else {
            element.innerHTML = "Public Repos: None";
        }
    }
    count=count+1;
});
})
async function returnGitData(username) {
    try {
        var request = await fetch(`https://api.github.com/users/${username}`);
        if (request.ok) {
            return await request.json();
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function returnGitReposInfo(username) {
    try {
        var request = await fetch(`https://api.github.com/users/${username}/repos`);
        if (request.ok) {
            const repos = await request.json();
            return repos.map(repo => ({
                name: repo.name,
                stars: repo.stargazers_count,
                url: repo.html_url
            }));
        } else {
            throw new Error("Error fetching repositories");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
