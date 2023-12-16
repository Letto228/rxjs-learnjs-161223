// // const stream$ = (new Observable<number>((subscriber: Subscriber<number>) => {
// //     console.log('CREATE');

// //     let count = 0;

// //     const intervalId = setInterval(() => {
// //         count += 1;

// //         console.log('INCREMENT ', count);

// //         subscriber.next(count);
// //     }, 1000);

// //     return () => {
// //         clearInterval(intervalId);
// //         console.log('DESTROY');
// //     }
// // })).pipe(
// //     share(),
// // );

// const stream$ = interval(1000).pipe(
//     share({
//         connector: () => new BehaviorSubject(99999),
//         // resetOnComplete: ,
//         // resetOnError: ,
//         // resetOnRefCountZero: ,
//     }),
// );

// stream$.subscribe(value => {
//     terminalLog(`Sub 1 - ${value}`);
// });

// setTimeout(() => {
//     stream$.subscribe(value => {
//         terminalLog(`Sub 2 - ${value}`);
//     });
// }, 3000);
