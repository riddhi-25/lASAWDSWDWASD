import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificJokeComponent } from './specific-joke.component';

describe('SpecificJokeComponent', () => {
  let component: SpecificJokeComponent;
  let fixture: ComponentFixture<SpecificJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
