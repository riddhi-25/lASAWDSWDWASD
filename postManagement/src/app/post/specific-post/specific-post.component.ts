import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-specific-post',
  templateUrl: './specific-post.component.html',
  styleUrls: ['./specific-post.component.css']
})
export class SpecificPostComponent implements OnInit{
  editForm!:NgForm
  showForm:boolean=false;
  editedProductData!: Product 
  postId!:number
  productData!:Product;
constructor(private activatedRoute:ActivatedRoute, private postDetailService:PostService){}
  ngOnInit(): void {
    this.postId=this.activatedRoute.snapshot.params['id'];
    this.postDetailService.getPostById(this.postId).subscribe((data)=>{
      console.log(data)
      this.productData=data;
      
      this.editedProductData ={...data } ; 
      
  })
}

editProduct(id:number){
  this.showForm=true;
}

editFormSubmit(editForm:NgForm){
  this.postId=this.productData.id;
  // this.postId=this.activatedRoute.snapshot.params['id'];
  this.postDetailService.editPost(this.postId, editForm.value).subscribe((response) => {
    console.log(response);
    this.productData = this.editedProductData ;
    
  }, (error) => {
    console.error(error);
       
  });
  this.showForm=false;
}
}