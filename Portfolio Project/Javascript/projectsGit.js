let currentPage = 1;
const itemsPerPage = 4;

async function DisplayRepos() {
    const divGrid = document.getElementById("GridTemplate");
    divGrid.innerHTML = "";

    const response = await fetchRepos('denis-lilaj', currentPage, itemsPerPage);
    if (!response) return;

    response.forEach(object => {
        const ul = document.createElement("ul");
        ul.className = "listContainer";
        for (let key in object) {
            const el = document.createElement("li");
            const a = document.createElement("a");

            if (key === "Url") {
                a.href = object[key];
                el.textContent = key;
                el.style.fontWeight = "bold";
                a.textContent = " : " + object[key];
                el.appendChild(a);
                ul.appendChild(el);
                continue;
            }
            el.textContent = key + ": ";
            el.style.fontWeight = "bold";
            const span = document.createElement('span');
            el.appendChild(span);
            span.textContent = object[key];
            ul.appendChild(el);
        }
        divGrid.appendChild(ul);
    });

    createPaginationControls(response.length);
}

async function fetchRepos(username, page, perPage) {
    const url = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const repos = await response.json();
        const repoDetails = repos.map(repo => ({
            Name: repo.name,
            Description: repo.description ?? "No description given",
            Url: repo.html_url,
            Created_at: repo.created_at,
            Updated_at: repo.updated_at
        }));

        return repoDetails;

    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

function createPaginationControls(itemsCount) {
    const paginationDiv = document.getElementById("Pagination");
    paginationDiv.innerHTML = "";

    const previousButton = document.createElement("button");
    previousButton.textContent = "Previous";
    previousButton.disabled = currentPage === 1;
    previousButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            DisplayRepos();
        }
    };

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = itemsCount < itemsPerPage;
    nextButton.onclick = () => {
        currentPage++;
        DisplayRepos();
    };

    paginationDiv.appendChild(previousButton);
    paginationDiv.appendChild(nextButton);
}

DisplayRepos();