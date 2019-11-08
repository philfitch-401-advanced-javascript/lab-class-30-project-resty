export const getLyrics = (url, method, json) => {
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
};
