import { Observable, animationFrameScheduler, asapScheduler, asyncScheduler, interval, map, takeWhile, tap } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time$(): Observable<number> {
    // const startTime = Date.now();
    const startTime = animationFrameScheduler.now();

    return interval(0, animationFrameScheduler).pipe(
        // map(() => Date.now() - startTime), // верменной diff
        map(() => animationFrameScheduler.now() - startTime), // верменной diff
    );
}

function duration$(allMs: number): Observable<number> {
    return time$().pipe(
        map(time => time / allMs),
        tap(console.log),
        takeWhile(percentage => percentage <= 1),
    );
}

const diffInPx = 100;

export function animationDownElement$(element: HTMLElement, animationTime: number) {
    return duration$(animationTime).pipe(
        map(animationFn),
        map(percentageDiff => percentageDiff * diffInPx),
        tap(translate => {
            element.style.transform = `translateY(${translate}px)`;
        })
    )
}
