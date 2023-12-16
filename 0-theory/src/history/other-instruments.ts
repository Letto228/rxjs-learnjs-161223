// const stream = new Promise(resolve => {
//     let count = 0;

//     setInterval(() => {
//         count += 1;

//         console.log('INCREMENT ', count);

//         resolve(count);
//     }, 1000);
// })

// stream.then(value => {
//     terminalLog(value);
// })

// setTimeout(() => {
//     stream.then(value => {
//         terminalLog(value);
//     })
// }, 2000);

// const stream = (function* iteratorFn() {
//     let count = 0;

//     while (true) {
//         count += 1;

//         console.log('INCREMENT ', count);

//         yield count;
//     }
// })();

// // terminalLog(stream.next().value);
// // terminalLog(stream.next().value);
// // terminalLog(stream.next().value);
// // terminalLog(stream.next().value);
// // terminalLog(stream.next().value);
// // terminalLog(stream.next().value);

// setInterval(() => {
//     terminalLog(stream.next().value);
// }, 1000);
