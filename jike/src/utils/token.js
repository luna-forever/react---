const tokenkey='token'

function setToken (token) {
    return localStorage.setItem(tokenkey, token)
  }
  
  function getToken () {
    return localStorage.getItem(tokenkey)
  }
  
  function clearToken () {
    return localStorage.removeItem(tokenkey)
  }
  
  export {
    setToken,
    getToken,
    clearToken
  }