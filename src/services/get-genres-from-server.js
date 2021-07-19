export default async function getGenresFromServer(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
}
