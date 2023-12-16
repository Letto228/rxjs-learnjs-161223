// import { MonoTypeOperatorFunction, Observable, OperatorFunction, filter, interval, map, of, pipe, take, tap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';
// import { error } from 'jquery';

// // function filterStreamByValue<T>(
// //     filterCb: (value: T) => boolean
// // ): (source$: Observable<T>) => Observable<T> {
// //     return (source$: Observable<T>) => new Observable<T>(subscriber => {
// //         const subscription = source$.subscribe({
// //             next: value => {
// //                 if (filterCb(value)) {
// //                     subscriber.next(value);
// //                 }
// //             },
// //             error: error => {
// //                 subscriber.error(error);
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             },
// //         });

// //         // return () => {
// //         //     subscription.unsubscribe();
// //         // };
// //         // return {
// //         //     unsubscribe: () => {
// //         //         subscription.unsubscribe();
// //         //     }
// //         // };
// //         return subscription;
// //     });
// // }

// // function filterStreamByValue<T>(filterCb: (value: T) => boolean): MonoTypeOperatorFunction<T> {
// //     return (source$: Observable<T>) => new Observable<T>(
// //         subscriber => source$.subscribe({
// //             next: value => {
// //                 if (filterCb(value)) {
// //                     subscriber.next(value);
// //                 }
// //             },
// //             error: error => {
// //                 subscriber.error(error);
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             },
// //         })
// //     );
// // }

// // const stream$ = of(1,2,3,4,5,6,7,8,9);
// // const filterStreamByEvenNumber = filter<number>(value => value % 2 === 0);
// // const childStream$ = filterStreamByEvenNumber(stream$);

// // childStream$.subscribe(terminalLog);
// // filterStreamByEvenNumber(interval(100)).subscribe(terminalLog);

// // function stub(source$: Observable<unknown>): Observable<string> {
// //     return new Observable(subscriber => {
// //         return source$.subscribe({
// //             next: _value => {
// //                 subscriber.next('STUB');
// //             },
// //             error: error => {
// //                 subscriber.error(error);
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             },
// //         })
// //     })
// // }


// /* -------------------------------------------------------------------------------- */

// // const stream$ = of(1,2,3,4,5,6,7,8,9);

// // const filterEven = filter<number>(value => value % 2 === 0);
// // const double = map<number, number>(value => value * 2);

// // const filterEvenChildStream$ = filterEven(stream$);
// // const doubleChildStream$ = double(filterEvenChildStream$);

// // doubleChildStream$.subscribe(terminalLog);

// // const resultStream$ = double( // doubleChildStream$
// //     filterEven( // filterEvenChildStream$
// //         stream$
// //     )
// // )

// // resultStream$.subscribe(terminalLog);

// // function pipe<T, U>(
// //     ...operators: Array<OperatorFunction<any, any>>
// // ): OperatorFunction<T, U> {
// //     return (source$: Observable<T>): Observable<U> => operators.reduce(
// //         (currentSource$, operator) => operator(currentSource$) as Observable<any>,
// //         source$,
// //     ) as unknown as Observable<U>;
// // }

// // const resultOperator = pipe(
// //     filterEven,
// //     double,
// // );

// // resultOperator(stream$).subscribe(terminalLog);

// // pipe(filterEven, double)(stream$).subscribe(terminalLog);

// // stream$
// //     .pipe(
// //         filterEven,
// //         double
// //     )
// //     .subscribe(terminalLog);

// // observable.pipe(...) ~ pipe(...)(observable)

// // const stream$ = of(1,2,3,4,5,6,7,8,9);

// const stream$ = interval(1000);

// // Marbles
// // - === 1000ms (1s) (1 frame)
// // -0-1-2-3-4-5-6-7-8-9-

// // take(9)
// // -0-1-2-3-4-5-6-7-8|

// // tap(...)
// // -0-1-2-3-4-5-6-7-8|

// // filter(value => value % 2 === 0),
// // -0- -2- -4- -6- -8|

// // map(value => value * 2),
// // -0- -4- -8- -12- -16|

// stream$
//     .pipe(
//         take(9),
//         tap({
//             next: value => {
//                 console.log(value);
//             }
//         }),
//         filter(value => value % 2 === 0),
//         map(value => value * 2),
//     )
//     .subscribe(terminalLog);
