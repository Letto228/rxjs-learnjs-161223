// const errorStream$ = new Observable(subscriber => {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.error('Error!');
// });

// errorStream$
//     .pipe(
//         tap({
//             error: console.log,
//         }),
//         retry({
//             count: 3,
//             // delay: 1000,
//             delay: (error, retryCount) => timer(1000 * retryCount),
//             resetOnSuccess: true,
//         }),
//         catchError(error => {
//             console.log('Is Error', error);

//             // return of(0,1,2);
//             // return stream$;
//             return EMPTY; // |
//             // return NEVER; // ----------------...
//             // return throwError(() => 'Ahahah'); // X
//         }),
//     )
//     .subscribe({
//         complete: () => {
//             terminalLog('Completed');
//         },
//         next: terminalLog,
//         error: error => {
//             terminalLog(`Error: ${error}`);
//         },
//     });
