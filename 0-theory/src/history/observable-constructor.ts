// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = new Observable<number>((subscriber: Subscriber<number>) => {
//     console.log('CREATE');

//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT ', count);

//         subscriber.next(count);

//         if (count === 5) {
//             subscriber.complete();
//             // subscriber.error(new Error('Danger'));
//         }
//     }, 1000);

//     return () => {
//         clearInterval(intervalId);
//         console.log('DESTROY');
//     }
// });

// const allSubscription = new Subscription();

// allSubscription.add(
//     stream$.subscribe({
//         next: value => {
//             terminalLog(value);
//         },
//         complete: () => {
//             terminalLog('Success complete');
//         },
//         error: error => {
//             terminalLog(`Error complete: ${error.message}`);
//         }
//     }),
// );

// allSubscription.add(
//     stream$.subscribe({
//         next: value => {
//             terminalLog(value);
//         },
//         complete: () => {
//             terminalLog('Success complete');
//         },
//         error: error => {
//             terminalLog(`Error complete: ${error.message}`);
//         }
//     })
// );

// setTimeout(() => {
//     // subsctiptionFirst.unsubscribe();
//     // subsctiptionSecond.unsubscribe();
//     allSubscription.unsubscribe();
// }, 3000);
