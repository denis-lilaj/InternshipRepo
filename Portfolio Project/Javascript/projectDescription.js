function RenderInfo(imgSrc, note) {
    const [projectTitle, ...descriptionLines] = note.split('\n');
    const projectDescription = descriptionLines.join('\n').trim();

    const formattedDescription = projectDescription
        .split('\n')
        .map(line => line.includes(':') ? line + '<br>' : line)
        .join('\n');

    let img = document.createElement('img');
    img.setAttribute("src", imgSrc);
    img.classList.add('project-image');

    let h2Element = document.createElement('h2');
    h2Element.textContent = projectTitle;

    let description = document.createElement('p');
    description.innerHTML = formattedDescription;

    let buttonDownload = document.createElement('button');
    buttonDownload.textContent = "Download Project";

    let mainContainer = document.getElementsByClassName("mainContainer");

    mainContainer[0].innerHTML = '';

    let flexContainer = document.createElement('div');
    flexContainer.classList.add('flex-container');

    flexContainer.appendChild(img);
    
    let textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    textContainer.appendChild(h2Element);
    textContainer.appendChild(description);
    textContainer.appendChild(buttonDownload);
    
    flexContainer.appendChild(textContainer);

    mainContainer[0].appendChild(flexContainer);
}



async function ReadNotes() {
    let projectInfoArray = [];
    const response = await fetch("http://127.0.0.1:5500/ProjectsNotes.txt");
    const text = await response.text();
    projectInfoArray = text.split(/\n\s*\n/);    
    return projectInfoArray;
 }
 

const searchParams = new URLSearchParams(window.location.search);

ReadNotes().then(notesInfo => {
    var notes = notesInfo; 
    console.log(notes);
    switch(searchParams.get('name'))
    {
    case "ClusteringAIB":
        RenderInfo("../Assets/Images/ClusteringAI.jpg", notes[0]);
        break;
    case "AuctionWebAppB":
        RenderInfo("../Assets/Images/AuctionWebApp.jpg", notes[1]);
        break;
    case "CarRentalWebAppB":
        RenderInfo("../Assets/Images/CarRentalWebApp.png",notes[2]);
        break;
    case "OpenWeatherAPIB":
        RenderInfo("../Assets/Images/OpenWeatherAPI.png",notes[3]);
        break;
    }
});






