import { Observable, auditTime, fromEvent, map, switchMap, takeUntil, tap } from "rxjs";

interface ElementPosition {
    top: number;
    left: number;
}

export function dragElement$(element: HTMLElement): Observable<ElementPosition> {
    const elementMouseDown$ = fromEvent<MouseEvent>(element, 'mousedown');
    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

    return elementMouseDown$.pipe(
        tap(event => {
            event.preventDefault();
        }),
        switchMap(({offsetX, offsetY}) => mouseMove$.pipe(
            tap(event => {
                event.preventDefault();
            }),
            map(({clientX, clientY}) => ({
                top: clientY - offsetY,
                left: clientX - offsetX,
            })),
            // auditTime(200),
            takeUntil(mouseUp$),
        )),
        // takeUntil(mouseUp$),
    );
}