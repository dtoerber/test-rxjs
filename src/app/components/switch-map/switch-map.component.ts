import { Component, OnInit } from '@angular/core';
import { Observable, from, of, interval } from 'rxjs';
import { switchMap, tap, take, map, exhaustMap, delay } from 'rxjs/operators';
@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  letter$: Observable<string> = interval(500).pipe(
    map((x) => ['A', 'B', 'C'][x])
  );

  outer$: Observable<any> = interval(500).pipe(
    take(5),
    map((d) => `outer ${d}`)
  );

  inner$: Observable<any> = interval(500).pipe(
    take(5),
    map((d) => `inner ${d}`)
  );

  // test$: Observable<any> = this.outer$.pipe(switchMap((o) => this.inner$));
  test$: Observable<any> = this.inner$.pipe(switchMap((o) => this.outer$));

  constructor() {}

  ngOnInit(): void {}
}
