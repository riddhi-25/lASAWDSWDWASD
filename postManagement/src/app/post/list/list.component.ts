import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  productData!: Product[];

  constructor(private postService: PostService, private router: Router
    , private sanitizer:DomSanitizer


  ) { }

  ngOnInit(): void {

    this.subscription = this.postService.getPosts().subscribe((data) => {

      this.productData = data

    })

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getSanitizedImageUrl(imageUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
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