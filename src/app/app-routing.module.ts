import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {AboutComponent} from "./pages/about/about.component";
import {AdminComponent} from "./pages/admin/admin.component";

const routes: Routes = [
  {path:'gallery', component: GalleryComponent},
  {path:'about', component: AboutComponent},
  {path:'admin', component: AdminComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
