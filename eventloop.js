const a = () => console.log('a')
const b = () => console.log('b')
const c = () => {

    setTimeout(a, 5000)
    b()
    console.log('c')
}
c()