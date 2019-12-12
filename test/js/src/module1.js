//分别暴露
export let data = 'ThankYouKris';
export function demo1() {
    console.log(`我是module1里的demo函数`,data.toUpperCase());
}
export function test1() {
    console.log(`我是module1里的test函数`,data.toLowerCase());
}
