import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  productData!:Product[];

constructor(private postService:PostService, private router:Router
){}



ngOnInit(): void {
  this.postService.getPosts().subscribe((data)=>{
 
    this.productData=data
  })

}


}

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