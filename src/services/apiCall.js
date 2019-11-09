
// function apiCall(url, method, json) {
function apiCall(url, method, json) {
  if(method === 'get' || method === 'post' || method === 'put' || method === 'delete') {
    return fetch(url, { method }) 
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
  } else {
    return fetch(url, {
      method,
      json
    })
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
  }
}


export default apiCall;