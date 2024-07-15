import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });
    service = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all the Posts', () => {
    let posts: any[] = [];
    service.getPosts().subscribe((response) => {
      posts = response;
    });
    const req = httpTestingController.expectOne(
      'https://api.escuelajs.co/api/v1/products/'
    );
    req.flush([{ id: '1', title: 'xyz' }]);
    expect(posts).toEqual([{ id: '1', title: 'xyz' }]);
  });

  it('should get the post by Id',()=>{
    const postId = 1;
    const post = { id: postId, title: 'xyz' };

    service.getPostById(postId).subscribe((response) => {
      expect(response).toEqual(post);
    });

    const req = httpTestingController.expectOne(`https://api.escuelajs.co/api/v1/products/${postId}`);
    req.flush(post);
  });
  
  it('should add a new post', () => {
    const data = { title: 'New Post', content: 'This is a new post' };
    const response = { id: 1, title: 'New Post', content: 'This is a new post' };
  
    service.addPost(data).subscribe((res) => {
      expect(res).toEqual(response);
    });
  
    const req = httpTestingController.expectOne('https://api.escuelajs.co/api/v1/products/');
    
    expect(req.request.body).toEqual(data);
  
    req.flush(response);
  });
});
