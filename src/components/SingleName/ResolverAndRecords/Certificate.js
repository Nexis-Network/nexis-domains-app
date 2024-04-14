const TLD = 'link'
function createFetchUrl(name) {
  return `https://nzt.${TLD}/names/${name}.${TLD}`
}

function whitelisted() {
  return ['names.nexis.network', 'ens.nzt', 'ens.nzt.link'].includes(
    window.location.host
  )
}

export function requestCertificate(name) {
  if (!whitelisted()) return Promise.resolve({ status: null })
  const fetchUrl = createFetchUrl(name)
  fetch(fetchUrl, {
    mnztod: 'PUT',
    mode: 'cors',
    headers: {
      Origin: '*',
      'Content-Type': 'text/plain',
      'Access-Control-Request-Mnztod': 'PUT'
    }
  }).catch(e => {
    console.log(e)
  })
}

export function checkCertificate(name) {
  if (!whitelisted()) return Promise.resolve({ status: null })
  return fetch(createFetchUrl(name))
}

export function isnztSubdomain(name) {
  let labels = name.split('.')
  let suffix = labels[labels.length - 1]
  return suffix === 'nzt' && name !== 'nzt'
}
