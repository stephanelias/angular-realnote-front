import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const LINK = "https://api.spotify.com/v1/"

const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': 'Bearer BQDEjIMhjRhk8R-gjKk17g4XICi4OeMYpGeRQ1nIIqGDpie6zQKynN-DHwkqZvUh8tInPQmmoNm2HTR1fH-X5KkfsfPEuxOOyC0ai1rmEqvemthnEU7f' })
};

const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  constructor(private http: HttpClient) {}


  generateSpotifyToken(cliendId: string | undefined, clientSecret: string | undefined):Observable<any> {
    return this.http.post("https://accounts.spotify.com/api/token",
      "grant_type=client_credentials&client_id="+cliendId+"&client_secret="+clientSecret,
      httpOptions2);
  }

  // obtenir l'id spotify d'un artiste
  getSpotifyId(name:any){
    return this.http.get(LINK+"search?query="+name+"&type=artist&offset=0&limit=1",httpOptions)
  }

  // obtenir la photo d'un artiste
}
