import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  posts!: Post[];
  distinctUserIds: number[] = [];
  inputText!: string;

  filteredPosts: Post[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((posts) => {

      this.posts = posts;
      this.distinctUserIds = [...new Set(this.posts.map(post => post.userId))];
      this.filteredPosts = posts;
    })
  }

  textInput(event: Event): void {
    this.inputText = ((<HTMLInputElement>event.target).value);

  };

  onSelectedNumber(userId: string) {
    this.filteredPosts = this.posts.filter(post => post.userId === +userId);
  }
 
}


interface Post {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}