

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (!response.statusCode) {
    return response;
  }
  console.log('error')
  console.log(response)
  throw response;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default async function request(url, options) {
  console.log(url)
  console.log(options)
  return fetch(url, options)
  .then((response) => response.json())
  .then((response)=>{
    response = checkStatus(response);
    console.log("Succesful Request // No Status Code")
    return response;
  });
}
