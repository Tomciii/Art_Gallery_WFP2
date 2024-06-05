import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {Art} from "../model/art.model";


@Injectable({
  providedIn: 'root',
})
export class ArtFacade {
  private getAllArt = 'http://localhost:8085/application/public/api/getAllArt';
  private save = 'http://localhost:8085/application/public/api/save'
  private deleteUrl = 'http://localhost:8085/application/public/api/delete'

  constructor(private http: HttpClient) {}

  getArtList() {
    return firstValueFrom(this.http.get<Art[]>(this.getAllArt));
}

  saveArt(art: Art){
    return this.http.post<Art>(this.save, art)
  }

  delete(int: number) {
    return this.http.post(this.deleteUrl, int);
  }
};
