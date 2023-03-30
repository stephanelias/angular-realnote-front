import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {StorageService} from "../../services/storage.service";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  currentUser! : User ;
  hasSpotifyCredentials!: boolean  ;

  credentialsChanged : boolean = false ;
  newPassword : string = '' ;
  hasUsernameChanged : boolean = false ;
  hasPasswordChanged : boolean = false ;

  hasTokenChanged : boolean = false ;

  constructor(private storageService: StorageService, public userService: UserService,private spotifyService : SpotifyService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser(this.storageService.getUser().id).subscribe(
      {
        next: (value) => {
          this.currentUser = value ;
          if (this.currentUser.spotifyClientSecret == null && this.currentUser.spotifyClientId == null) this.hasSpotifyCredentials = false ;
          else this.hasSpotifyCredentials = true ;
          console.log(value) ;

        },
        error : (err) => {
          console.error(err) ;
        }
      }
    ) ;
  }

  onChangeUsername() {
    this.userService.changeUsername(this.currentUser.id,this.currentUser.username).subscribe({
      next: value => {
        this.hasUsernameChanged = true ;
        console.log(value);
      }
    });
  }

  onChangePassword() {
    this.userService.changePassword(this.currentUser.id,this.newPassword).subscribe({
      next: value => {
        this.hasPasswordChanged = true ;
        console.log(this.hasPasswordChanged) ;
      }
    }) ;
  }

  onSaveCredentials() {
    this.userService.saveSpotifyCredentials(this.currentUser.id,this.currentUser.spotifyClientId,this.currentUser.spotifyClientSecret).subscribe({
      next: value => {
        console.log(value)
        this.credentialsChanged = true
      }
    })
  }

  onGenerateSpotifyToken(){
    this.spotifyService.generateSpotifyToken(this.currentUser.spotifyClientId,this.currentUser.spotifyClientSecret).subscribe({
      next: value => {
        this.hasTokenChanged = true
        this.userService.changeSpotifyToken(this.currentUser.id,value.access_token).subscribe({
          next: value1 => {
            console.log("token save :"+ value1)
          }
        })
        console.log(value)
      }
    })
  }
}
