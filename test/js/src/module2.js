//统一暴露

let arr = [1,3,5,7,9];
function demo2() {
    console.log(`我是module2里的demo2函数`)
}
function test2() {
    console.log(`我是module2里的test2函数`)
}

export {test2,demo2}