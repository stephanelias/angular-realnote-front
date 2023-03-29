import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const LINK = "https://api.spotify.com/v1/"

const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': 'Bearer BQDEjIMhjRhk8R-gjKk17g4XICi4OeMYpGeRQ1nIIqGDpie6zQKynN-DHwkqZvUh8tInPQmmoNm2HTR1fH-X5KkfsfPEuxOOyC0ai1rmEqvemthnEU7f' })
};
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  // obtenir l'id spotify d'un artiste
  getSpotifyId(name:any){
    return this.http.get(LINK+"search?query="+name+"&type=artist&offset=0&limit=1",httpOptions)
  }

  // obtenir la photo d'un artiste
}
