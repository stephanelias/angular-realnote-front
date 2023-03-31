import { Component } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {SpotifyService} from "../../services/spotify.service";
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentUser! : User ;

  idTest! : number

  array1! : any []

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private spotifyService: SpotifyService
    ) {
  }

  ngOnInit() {
   this.userService.getCurrentUser(this.storageService.getUser().id).subscribe(
      {
        next: (value) => {
          this.currentUser = value ;
          console.log(this.currentUser.spotifyToken) ;
          //test

        },
        error : (err) => {
          console.error(err) ;
        }
      }
    ) ;
    /*this.spotifyService.getSearchResponse("yeat",this.currentUser.spotifyToken).subscribe({
        next: value => {
          console.log("ok")
         // console.log(JSON.parse(JSON.stringify(value)).artists.items[0].id);

        },
        error: err => console.error(this.currentUser.id)
      }
    )*/

  }

  onTest() {


  }


}
