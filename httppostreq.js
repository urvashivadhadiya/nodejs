const axios = require("axios");

let data = JSON.stringify("urvashi");

axios.post('https://reqres.in/api/users', data).then(res => {
    console.log('status ', res.status);
    console.log("show data", res.data);
}).catch(err => {
    console.log(err)
})