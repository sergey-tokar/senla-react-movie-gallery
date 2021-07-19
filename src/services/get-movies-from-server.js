export default async function getMoviesFromServer(url) {
   return fetch(url)
        .then((response) => {
            return response.json();
        })
}
