import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

interface CategoryList {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
interface Product{
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  addPost!: FormGroup
  categoryList!: CategoryList[]
  newProduct!:Product;
  newRes !:any;
  check:boolean = false;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.addPost = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      //   images: new FormControl([
      //   "https://placeimg.com/640/480/any"
      // ], Validators.required),
      images: new FormArray([new FormControl('', Validators.required)]
      )
    });
    this.getCategories();
  }
  getCategories() {
  this.postService.getCategoryId().subscribe((data) => {

      this.categoryList = data
      console.log(this.categoryList)
    })
  }

  addImage() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.addPost.get('images')).push(control)
  }

  get imageControls() {
    return (<FormArray>this.addPost.get('images')).controls
  }


  onSubmit() {
    console.log(this.addPost.value);
    this.postService.addPost(this.addPost.value).subscribe((res) => {
    // this.newProduct = res;
    // this.newRes = res.images[0];
    // this.newRes = this.newRes.replace("[","");
    // this.newRes = this.newRes.replace("]","");
    // this.newRes = this.newRes.replaceAll(`"`,"");
    // this.check = true;
      console.log(res);
      alert('product added successfully')
      this.router.navigate(['header'])
    }, (error) => {
      console.error(error);
    });

  }

}