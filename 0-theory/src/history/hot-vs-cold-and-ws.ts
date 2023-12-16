// const ws = new WebSocket('ws://localhost:8081');

// ws.addEventListener('open', () => {
//     ws.send('on');
// });

// const wsMessage$ = new Observable<MessageEvent>(subscriber => {
//     console.log('START');

//     function listenerMessage(event: MessageEvent) {
//         console.log('NEW EVENT', event);
//         subscriber.next(event);
//     }

//     function listenerClose() {
//         subscriber.complete();
//     }

//     function listenerError(error: Event) {
//         subscriber.error(error);
//     }

//     ws.addEventListener('message', listenerMessage);
//     ws.addEventListener('close', listenerClose);
//     ws.addEventListener('error', listenerError);

//     return () => {
//         console.log('DESTROY');
//         ws.removeEventListener('message', listenerMessage);
//         ws.removeEventListener('close', listenerClose);
//         ws.removeEventListener('error', listenerError);
//     }
// });

// setTimeout(() => {
//     wsMessage$.subscribe(({data}) => {
//         terminalLog(data);
//     });
// }, 3000);

// setTimeout(() => {
//     wsMessage$.subscribe(({data}) => {
//         terminalLog(data);
//     });
// }, 5000);
