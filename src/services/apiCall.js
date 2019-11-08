
// function apiCall(url, method, json) {
function apiCall(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
}

export default apiCall;