import {Component, Input} from '@angular/core';
import {Art} from "../../model/art.model";

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent {
  @Input() art: Art = {} as Art;
}
