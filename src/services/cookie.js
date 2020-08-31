const getCookie = function (name) {
  if (!document.cookie) {
    return null
  }

  const cookies = document.cookie
    .split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith(name + '='))

  if (cookies.length === 0) {
    return null
  }
  return decodeURIComponent(cookies[0].split('=')[1])
}

export default getCookie
