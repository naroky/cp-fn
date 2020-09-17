const cpFunction = () => {
  const url = 'http://localhost:5000/api/cpAuthen'
  // const url = "https://aoc-dev.truecorp.co.th/cp-back-stg/api/cpAuthen";

  // Draw all the values from input fields
  const client_id = document.getElementById('client-id').value
  const client_secret = document.getElementById('secret-key').value
  const cp_trans_id = document.getElementById('cp-trans-id').value
  const service_id = document.getElementById('service-id').value
  const css_keyword = document.getElementById('css-keyword').value
  const cp_id = document.getElementById('cp-id').value

  const postConfig = {
    method: 'POST',
    body: JSON.stringify({
      client_id,
      client_secret,
      cp_id,
      service_id,
      css_keyword,
      cp_trans_id
    }),
    // POST with headers configurable in case of custom securities
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Call "authen" function. Throws in prepared URL and POST configs
  const authenResponse = authen(url, postConfig)

  // Returning value from authen() will always be a promise (requires ".then" to do something with the returning value)
  authenResponse.then(data => {
    if (data.status === 200) {
      aoc('STG')
    } else {
      // If "data.status" isn't returning 200 (isn't OK)
      console.log(data)
      alert(`Error code: ${data.status}.\nError message: ${data.statusText}.`)
    }
  })
}
