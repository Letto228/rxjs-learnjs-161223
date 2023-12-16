// // Subject = Observable + Observer | is Hot

// const stream$ = new AsyncSubject<number>();

// stream$.subscribe(value => {
//     terminalLog(`Sub 1 - ${value}`);
// });

// stream$.next(1);
// stream$.next(2);
// stream$.next(3);

// setTimeout(() => {
//     stream$.next(4);
//     stream$.next(5);
//     stream$.next(6);
// }, 3000);

// setTimeout(() => {
//     stream$.subscribe(value => {
//         terminalLog(`Sub 2 - ${value}`);
//     });

//     stream$.complete();

//     stream$.next(7);
//     stream$.next(8);
//     stream$.next(9);
// }, 5000);