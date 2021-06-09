function a(u, callback) {
    setTimeout(() => {
        console.log(u)
        callback()
    }, 3000)
}

function b(callback) {
    console.log("this is function b")
    callback()
}


// a("hello", () => console.log("this is not b"))
// b(a)
a("hello", b(() => console.log("test over")))