import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {elementAt, Observable} from "rxjs";


const API = "http://localhost:8000/api/"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /**
   * requête POST vers le backend pour se connecter
   */
  login(username: string, password: string ) {
    return this.http.post(
      API+"login_check",
      {username, password},
      httpOptions
    )
  }


}
