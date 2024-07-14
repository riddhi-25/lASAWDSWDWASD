import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-specific-joke',
  templateUrl: './specific-joke.component.html',
  styleUrls: ['./specific-joke.component.css']
})
export class SpecificJokeComponent  implements OnInit{
  constructor(private jokeService: DataService) { }

  jokes!: Joke[];
  ngOnInit(): void {
      this.getJoke();
  }
getJoke(){
  this.jokeService.getJokes().subscribe((joke) => {
        this.jokes = [joke];
     })
}

}

interface Joke {
  id: string;
  joke: string;
  status: string
}