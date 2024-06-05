import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, HashLocationStrategy, LocationStrategy, NgFor, NgForOf} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HttpClientModule} from "@angular/common/http";
import { ArtComponent } from './components/art/art.component';
import { AdminComponent } from './pages/admin/admin.component';
import {FormsModule, NgModel} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    GalleryComponent,
    ArtComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgFor,
    HttpClientModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
