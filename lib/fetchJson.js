/**
 * @param  {} ...args, a javascript object 
 * @description takes in a URL and fetches the response, if there is an error then we send an error message back
 */
export default async function fetcher(...args) {
  try {
    const response = await fetch(...args)

    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    const data = await response.json()

    if (response.ok) {
      return data
    }

    const error = new Error(response.statusText)
    error.response = response
    error.data = data
    throw error
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message }
    }
    throw error
  }
}
