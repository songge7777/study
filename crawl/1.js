
let axios = require('axios')
let url = 'https://follow-api-ms.juejin.im/v1/getUserFollowInfo?uid=55a4cb1fe4b039f185f88d9c&src=web';
(async function() {
  let result = await axios.get(url)
  console.log(result.data)
})()