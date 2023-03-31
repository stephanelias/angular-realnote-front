import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist} from "../models/artist.model";

const baseUrl = 'http://localhost:8000/api/artists';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtistsCollection(): Observable<Artist[]> {
    return this.http.get<Artist[]>(baseUrl)
  }

  addNewArtist(name: any, photoLink: any, type: string): Observable<Artist> {
    return this.http.post<Artist>(
      baseUrl, {
        "name":name,
        "photoLink":photoLink,
        "type":type
      },
      httpOptions)
  }
}
