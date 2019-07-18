import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { ReaderPostsComponent } from './components/reader-posts/reader-posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditorPostsComponent } from './components/editor-posts/editor-posts.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'editor', component: EditorPostsComponent },
  { path: 'readerposts', component: ReaderPostsComponent },
  { path: 'run', component: ActivityListComponent },
  { path: 'run/:id', component: MapComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
