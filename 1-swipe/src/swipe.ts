import { Observable, filter, map, zip } from "rxjs";

export function swipe$(
    down$: Observable<MouseEvent>,
    up$: Observable<MouseEvent>,
): Observable<number> {
    return zip(
        down$.pipe(map(({clientX}) => clientX)),
        up$.pipe(map(({clientX}) => clientX)),
    ).pipe(
        map(([downPosition, upPosition]) => downPosition - upPosition),
        filter(diff => Math.abs(diff) > 30),
    )
}