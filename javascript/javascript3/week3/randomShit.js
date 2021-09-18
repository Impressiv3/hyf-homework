const url = "https://api.github.com/search/repositories?q=user:";
const repoName1 = "JiuTak";
const repoName2 = "saloumeh-67";
const repoName3 = "Infamou5";

async function getRepo(repoName) {
  try {
    const response = await fetch(`${url}${repoName}`);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

async function displayRepo(repository) {
  const repo = await getRepo(repository);
  renderHTMLfromRepoData(repo.items);
}

async function renderHTMLfromRepoData(repoDataArray) {
  data = await repoDataArray;
  const ul = document.createElement("UL");
  document.body.appendChild(ul);

  data.forEach((item) => {
    const repoName = item.name;
    const repoURL = item.url;
    const repoOwner = item.owner.login;
    let li = document.createElement("LI");
    li.innerHTML = `${item.owner.login}'s repositories :`;
    ul.appendChild(li);
    const repoUL = document.createElement("UL");
    li.appendChild(repoUL);
    li = document.createElement("LI");
    li.innerHTML = `URL of repository: ${item.url}`;
    repoUL.appendChild(li);
  });
}

displayRepo(repoName1);

/* function getAllRepo() {
  Promise.all([getRepo(repoName1), getRepo(repoName2), getRepo(repoName3)])
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
}

getAllRepo(); */

////////////////////////////////////////////////////////////////////

const promisesArray = (() => {
  const promArr = [];
  repositoryNames.map((item) => {
    promArr.push(getRepo(item));
  });
  return promArr;
})();

async function getRepo(repoName) {
  try {
    const response = await fetch(`${baseURL}${repoName}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

Promise.all(promisesArray).then((values) => {
  console.log(values);
});
