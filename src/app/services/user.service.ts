import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {Router} from "@angular/router";


const API = "http://localhost:8000/api/users/"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' })
};


@Injectable({
  providedIn: 'root',
})
export class UserService {


  constructor(private http: HttpClient) {}

  getCurrentUser(id : any): Observable<User> {
    return this.http.get<User>(API+id) ;
  }

  changeUsername(id : any, username: string): Observable<User> {
    return this.http.patch<User>(API+id,{"username" : username},httpOptions) ;

  }

  changePassword(id : any, password: string): Observable<User> {
    return this.http.patch<User>(API+id,{"password" : password},httpOptions) ;
  }

  changeSpotifyToken(id : any, token: string): Observable<User> {
    return this.http.patch<User>(API+id,{"spotifyToken":token},httpOptions) ;
  }

  saveSpotifyCredentials(id: any, clientId: string | undefined, clientSecret: string | undefined) : Observable<User> {
    return this.http.patch<User>(API+id,
      {
        "spotifyClientId" : clientId,
        "spotifyClientSecret": clientSecret
      },
      httpOptions) ;
  }


}
