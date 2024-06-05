import {Component} from '@angular/core';
import {ArtFacade} from "../../facades/art.facade";
import {Art} from "../../model/art.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  art: Art = { id: Math.random(), imageURL: '', name: '', text: '' };
  index: string = '';

  constructor(private artFacade: ArtFacade) {}

  saveArt() {
    if (this.art.imageURL && this.art.name && this.art.text) {
      this.artFacade.saveArt(this.art).subscribe(() => {
        this.art = { id: Math.random(), imageURL: '', name: '', text: '' };
      });
    } else {
      console.log(this.art)
      console.log('Please fill in all required fields.');
    }
  }

  delete() {
if (this.index) {
  let intNumber: number = parseInt(this.index);
  this.artFacade.delete(intNumber);
}
  }
}
