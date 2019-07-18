BrowserModule.withServerTransition({ appId: 'new-blogks' });
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { EditorPostsComponent } from './components/editor-posts/editor-posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReaderPostComponent } from './components/reader-post/reader-post.component';
import { ReaderPostsComponent } from './components/reader-posts/reader-posts.component';
import { MapComponent } from './components/map/map.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { routes } from './app-routing.module';
import { MapService } from './services/map.service';
import { ActivityService } from './services/activity.service';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,     
	//EditorPostComponent,
    EditorPostsComponent,
    PageNotFoundComponent,
    ReaderPostComponent,  
    ReaderPostsComponent,
    MapComponent,
    ActivityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
	
  ],
  providers: [ActivityService, MapService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
