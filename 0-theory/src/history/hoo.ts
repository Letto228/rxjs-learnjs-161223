
// // const stream$ = interval(3000).pipe(
// //     // map(value => of(value)), // Observable<Observable<number>>
// //     // mergeAll(), // Observable<number>
// //     mergeMap(value => of(value)),
// // )

// // stream$.subscribe(value => {
// //     terminalLog(value);
// // });

// // const stream$ = interval(3000).pipe(
// //     switchMap(count => interval(500).pipe(
// //         map(value => `Root: ${count}: ${value}`),
// //     )),
// // )

// // const stream$ = interval(3000).pipe(
// //     // mergeMap(
// //     //     count => interval(500).pipe(
// //     //         map(value => `Root: ${count}: ${value}`),
// //     //         take(10),
// //     //     ),
// //     //     1,
// //     // ),
// //     concatMap(
// //         count => interval(500).pipe(
// //             map(value => `Root: ${count}: ${value}`),
// //             take(10),
// //         ),
// //     ),
// // )

// const stream$ = interval(3000).pipe(
//     exhaustMap(
//         count => interval(500).pipe(
//             map(value => `Root: ${count}: ${value}`),
//             take(10),
//         ),
//     ),
// )

// stream$.subscribe(terminalLog);

// // function switchMap(cb: (value: any) => Observable<any>): OperatorFunction<any, any> {
// //     return (parentSource$: Observable<any>) => new Observable(subscriber => {
// //         let nestedSubscription: Subscription | null = null;

// //         return parentSource$.subscribe({
// //             next: value => {
// //                 if (nestedSubscription) {
// //                     nestedSubscription.unsubscribe();

// //                     nestedSubscription = null;
// //                 }

// //                 const innerStream$ = cb(value);

// //                 nestedSubscription = innerStream$.subscribe(v => {
// //                     subscriber.next(v);
// //                 });
// //             },
// //             error: error => {
// //                 subscriber.error(error)
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             }
// //         })
// //     })
// // }