import { TestScheduler } from "rxjs/testing";
import { swipe$ } from "./swipe";

function createMouseEvent(clientX: number): MouseEvent {
    return new MouseEvent('mousemove', {clientX});
}

describe('Swipe test block', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('Swipe test exapmle', () => {
        testScheduler.run(({expectObservable, cold}) => {
            const mouseDown$ = cold(
                '-a---------b-----------|',
                {
                    a: createMouseEvent(2),
                    b: createMouseEvent(30),
                },
            );
            const mouseUp$ = cold(
                '--------a------------b-|',
                {
                    a: createMouseEvent(200),
                    b: createMouseEvent(20),
                },
            );

            const resultStream$ = swipe$(
                mouseDown$,
                mouseUp$,
            );

            const expectedMarbles = '--------a--------------|';
            const expectedMarblesValueMap = {
                a: -198,
            };

            expectObservable(resultStream$).toBe(expectedMarbles, expectedMarblesValueMap)
        });
    });
});