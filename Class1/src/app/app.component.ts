import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { PostService } from './services/post.service';
import { PhotoService } from './services/photo.service';
import { map, take } from 'rxjs/operators';
import { interval, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Class1';
  posts: Post[] = [];
  photos: any[] = [];

  constructor(
    private postService: PostService,
    private photoService: PhotoService
  ) {}
  ngOnInit(): void {
    // this.getPosts();
    this.getPhotos();
  }

  getPosts() {
    this.postService.getPosts().subscribe((res: any) => {
      res.forEach((element: any) => {
        this.posts.push(element);
      });
    });
  }

  getPhotos() {
    this.photoService.getPhotos().pipe(
      map((res: any) => {
        return res.slice(0,10);
      })
    ).subscribe((photos: any) => {
      this.photos = photos;
    });
  }
}
