let http = require("http")





http.get('http://api.open-notify.org/astros.json', res => {
    let data = '';
    res.on('data', collect => {
        data += collect
    });
    res.on('end', () => {
        let jsondata = JSON.parse(data)
        console.log(jsondata)
    });
})