
// console.log('Start');

// scheduled(Array.from({length: 10}, (_, i) => i), asapScheduler).subscribe(v => {
//     console.log('S 1: ', v)
// });

// interval(100).subscribe(console.log);

// from(Array.from({length: 10}, (_, i) => i)).subscribe(v => {
//     console.log('S 2: ', v)
// });

// console.log('End');

// console.log('Start');

// from(Array.from({length: 10}, (_, i) => i))
//     .pipe(
//         tap(() => {
//             console.log('Deafault scheduler');
//         }),
//         observeOn(asyncScheduler),
//         tap(() => {
//             console.log('Before async scheduler');
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(v => {
//         console.log('S 1: ', v)
//     });

// console.log('End');

// const stream1$ = scheduled([1, 2], asapScheduler);
// const stream2$ = of(10);

// const stream$ = combineLatest([
//     stream1$,
//     stream2$,
// ]);

// stream$.subscribe(console.log);