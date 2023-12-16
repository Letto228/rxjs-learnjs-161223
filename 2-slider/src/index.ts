import { combineLatest, fromEvent, map, withLatestFrom } from 'rxjs';
import '../../assets/css/style.css';
import { createSlider$ } from './slider';

const buttonElement = document.getElementById('send-result') as HTMLElement;
const buttonClick$ = fromEvent(buttonElement, 'click');

buttonClick$.pipe(
    withLatestFrom(
        createSlider$('quality'),
        createSlider$('rating'),
        createSlider$('actual'),
    ),
    map(([_event, quality, rating, actual]) => (quality + rating + actual) / 3),
).subscribe(console.log);

// combineLatest([
//     createSlider$('quality'),
//     createSlider$('rating'),
//     createSlider$('actual'),
// ]).subscribe(console.log);
