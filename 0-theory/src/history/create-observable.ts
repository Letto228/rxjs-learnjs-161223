
// interval(1000)

// timer(1000);

// of(1, 2, [3, 2], {count: 4}).subscribe(console.log);

// from([1, 2, [3, 2], {count: 4}]).subscribe(console.log);

// from(
//     fetch('https://learn.javascript.ru/courses/groups/api/participants?key=1nf31b2')
// ).subscribe(console.log);

// const deferStream$ = defer(() => {
//     const random = Math.random();

//     if (random > 0.7) {
//         return [1, 2, 3];
//     }

//     if (random > 0.4) {
//         return fetch('https://learn.javascript.ru/courses/groups/api/participants?key=1nf31b2');
//     }

//     return of(3,2,1);
// })

// deferStream$.subscribe(console.log);

// setTimeout(() => {
//     deferStream$.subscribe(console.log);
// }, 3000);

// from(fetch('https://jsonplaceholder.typicode.com/todos/1'))
//     .pipe(
//         switchMap(resp => resp.json()),
//     )
//     .subscribe(json => console.log(json));