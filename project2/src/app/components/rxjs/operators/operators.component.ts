import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, concatMap, debounceTime, delay, distinct, distinctUntilChanged, from, fromEvent, interval, map, mergeMap, min, Observable, of, skip, startWith, switchMap, take, takeWhile, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

interface data {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}
@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, AfterViewInit {
  constructor(private dataService: DataService) { }

  source1 = of(1, 2, 3, 4, 5, 1, 1, 2, 3, 4, 5, 6, 7, 7);
  example = this.source1.pipe(take(1));

  source = interval(1000);
  name = new FormControl('');
  search = new FormControl('');
  searchR:data[]=[];
  final!: any;

  nums = [10, 12, 5, 6, 7, 11, 13, 66, 99, 100];
  num$: Observable<number> = from(this.nums);
  finalNum!: any;

  ngOnInit(): void {
    this.name.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(val => {
      this.final = val;
    });

    this.num$.pipe(
      startWith(0)
    ).subscribe(data => {
      console.log(data);
    })

    this.num$.pipe(
      min()
    ).subscribe(data => {
      console.log("min:", data);
    })
    this.moreOperators()

    this.searchResult()

  }
  moreOperators() {
    console.log('takewhile:');
    this.source1
      .pipe(takeWhile((val) => val <= 3))
      .subscribe((val) => console.log(val));

    console.log('take:');
    this.source1.pipe(take(2)).subscribe((val) => console.log(val));

    console.log('map:');
    this.source1
      .pipe(map((val: number) => val + 10))
      .subscribe((val: number) => console.log(val));

      console.log('tap:');
    of(Math.random())
      .pipe(
        tap(console.log),
        map((n) => (n > 0.5 ? 'big' : 'small'))
      )
      .subscribe(console.log);
    // http.get('https://api.example.com/data').pipe(
    //   tap(response => {
    //     console.log('Received response:', response);
    //   }),
    //   catchError(error => {
    //     console.error('An error occurred:', error);
    //     throw error; // Re-throw the error to handle it further
    //   })
    console.log('catchError:');
    of(1, 2, 3, 4, 5)
      .pipe(
        map(n => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError(err => of('I', 'II', 'III', 'IV', 'V'))
      )
      .subscribe(x => console.log(x));
    // console.log("finalize");
    // this.source.pipe(take(5),finalize(()=>console.log('sequence
    // complete'))).subscribe(val=>console.log(val));

    console.log("diistinct");
    this.source1.pipe(distinct()).subscribe(x => console.log(x));
    console.log("diistinctUntilChanged");
    this.source1.pipe(distinctUntilChanged()).subscribe(x => console.log(x));

  
  }
  searchResult() {
    this.search.valueChanges.pipe(debounceTime(500),
  switchMap(data=>data?this.dataService.getSearch(data): of([]))).subscribe(res => {
   
      this.searchR=res;
    });
  }

  ngAfterViewInit(): void {
    this.dataService.getSearch('del').subscribe(res => {
      
    })
  }
}
const source = of(2000, 1000);

const example = source.pipe(
  concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
);
const subscribe = example.subscribe(val =>
  console.log(`With concatMap: ${val}`)
)

const mergeMapExample = source
  .pipe(
    delay(5000),
    mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  )
  .subscribe(val => console.log(`With mergeMap: ${val}`));
