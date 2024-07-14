import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-joke',
  templateUrl: './search-joke.component.html',
  styleUrls: ['./search-joke.component.css']
})
export class SearchJokeComponent implements OnInit {
  jokeList: Jokes[] = [];
  inputField: string = '';

  constructor(private searchedJokes: DataService) { }

  ngOnInit(): void {
    this.getFunc();
  }

  onInputChange(event: Event) {
    this.inputField = ((<HTMLInputElement>event.target).value);
    // this.getFunc();
  }

  getFunc() {
    this.searchedJokes.searchJokes().subscribe((jokes: Jokes[]) => {
      if (this.inputField) {
        this.jokeList = jokes.filter((joke) => {
          const jokeText = joke.joke.toLowerCase();
          return jokeText.includes(this.inputField.toLowerCase());
        });
      } else {
        this.jokeList = jokes;
      }
    });
  }
}

interface Jokes {
  id: string,
  status: number,
  joke: string
}