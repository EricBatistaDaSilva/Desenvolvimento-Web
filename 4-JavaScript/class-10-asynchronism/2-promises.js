const url = "https://api.github.com/users/EricBatistaDaSilva";

console.log("Início");

const gitHubUser = fetch(url)
    .then((request) => request.json()).then(({ name, bio }) => console.log({
        name,
        bio,
        })
    ).catch((error) => console.error(error)).finally(() => console.log("Fim da requisição"));

console.log(gitHubUser);
console.log("Fim");