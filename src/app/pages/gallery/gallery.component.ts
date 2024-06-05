import {Component, OnInit} from '@angular/core';
import {ArtFacade} from "../../facades/art.facade";
import {Art} from "../../model/art.model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  artList: Art[] = [];

  constructor(private artFacade: ArtFacade) {
}

  async ngOnInit(): Promise<void> {
    this.artList = await this.artFacade.getArtList();
    console.log(this.artList)
  }
}
