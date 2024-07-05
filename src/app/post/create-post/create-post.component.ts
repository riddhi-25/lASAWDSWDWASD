import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  addPost!: FormGroup
  constructor(private postService: PostService) { }
  ngOnInit(): void {
    this.addPost = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      images: new FormControl([
        "https://placeimg.com/640/480/any"
    ], Validators.required)
    });
  }


  onSubmit() {
    console.log(this.addPost.value);
    this.postService.addPost(this.addPost.value).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.error(error);
    });
  }
}