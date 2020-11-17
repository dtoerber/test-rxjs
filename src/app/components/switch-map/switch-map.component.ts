import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  outer$: Observable<number[]> = of([0, 1, 2, 3, 4]).pipe(
    tap((t) => console.log(`in an iteration val:`, t))
  );
  inner$: Observable<number[]> = of([0, 1, 2, 3, 4]);
  constructor() {}

  ngOnInit(): void {}
}
