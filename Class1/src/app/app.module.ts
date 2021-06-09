import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesService } from './services/countries.service';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountriesService, PostService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
