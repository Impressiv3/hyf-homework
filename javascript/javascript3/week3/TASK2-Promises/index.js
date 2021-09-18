const baseURL = "https://api.github.com/search/repositories?q=user:";
const repositoryNames = ["JiuTak", "saloumeh-67", "Infamou5"];
const mainUL = document.getElementById("mainUL");

/* `https://api.github.com/search/repositories?q=user:${repositoryName}` */

const getRepository = async (repositoryName) => {
  try {
    let url = `https://api.github.com/search/repositories?q=user:${repositoryName}`;
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 300) {
      let data = response;
      data = data.json();
      return data;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const repositoriesPromises = (() => {
  const responses = repositoryNames.map((repositoryName) => getRepository(repositoryName));
  return responses;
})();

const getRepositories = (async () => {
  let repositories = await Promise.all(repositoriesPromises);
  return repositories;
})();

const createList = (repository) => {
  const repositoryOwner = document.createElement("LI");
  repositoryOwner.textContent = `${repository.items[0].owner.login}'s Github Repositories. `;
  mainUL.appendChild(repositoryOwner);
  repository.items.forEach((repositoryItem) => {
    repositoryOwner.appendChild(createItems(repositoryItem));
  });
};

const displayContent = (async () => {
  const repositories = await getRepositories;
  repositories.forEach((repository) => {
    createList(repository);
  });
})();

/* function createList(repository) {
  const repositoryOwner = document.createElement("LI");
  repositoryOwner.textContent = `${repository.items[0].owner.login}'s Github Repositories. `;
  mainUL.appendChild(repositoryOwner);
  repository.items.forEach((repositoryItem) => {
    repositoryOwner.appendChild(createItems(repositoryItem));
  });
} */

function createItems(repositoryItem) {
  const ul = document.createElement("UL");
  const htmlUrl = document.createElement("LI");
  htmlUrl.textContent = repositoryItem.html_url;
  ul.appendChild(htmlUrl);
  return ul;
}

displayContent.catch(error);
