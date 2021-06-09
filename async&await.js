function a() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('hello')
        }, 4000)
    })
}

async function b(callback) {
    const b = await a()
    console.log("message", b)
    callback()
}

function c() {
    console.log("this is c ")
}

b(c)