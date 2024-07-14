import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJokeComponent } from './search-joke.component';

describe('SearchJokeComponent', () => {
  let component: SearchJokeComponent;
  let fixture: ComponentFixture<SearchJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
