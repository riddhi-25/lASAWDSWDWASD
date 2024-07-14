import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    // let obs=new Observable((observer)=>{observer.next(Math.random())})
    let subject = new Subject();

    //sub1
    subject.subscribe((data) => {
      console.log(data);
    })

    //sub2
    subject.subscribe((data) => {
      console.log(data);
    })
    subject.next(Math.random());

    this.behaviourSubject();
    this.replaySubject();
    this.asynSubject();
  }

  behaviourSubject() {
    const subject1 = new BehaviorSubject(0);
    subject1.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject1.next(1);
    subject1.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });
    // subject.next(3);
  }
  replaySubject() {
    const subject2 = new ReplaySubject(2, 1000);
    subject2.next(100);
    subject2.next(200);
    subject2.next(300);
    subject2.subscribe({
      next: (v) => console.log(v),
    });
    subject2.next(400);
  }
  asynSubject() {
    const subject3 = new AsyncSubject();
    subject3.next(100);
    subject3.next(200);
    subject3.complete();
    subject3.subscribe({
      next: (v) => console.log("async", v),
    });
    subject3.next(300);

  }
}
