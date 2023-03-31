import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

// Link of the Spotify API
const LINK = "https://api.spotify.com/v1/"

// Object to put in the options of the request to generate token
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

  // Get the response of a search to get key infos
  getSearchResponse(name: any, token: string,zone: string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer '+token })
    };
    return this.http.get(LINK+"search?query="+name+"&type=artist&market="+zone+"&offset=0&limit=1",httpOptions)
  }


}
