import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {StorageService} from "../../services/storage.service";
import {UserService} from "../../services/user.service";
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../models/artist.model";
import {ArtistService} from "../../services/artist.service";

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent {

  currentUser! : User ;
  artistsList? : Artist[] ;

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private artistService: ArtistService
  ) {}

  ngOnInit() {
    this.userService.getCurrentUser(this.storageService.getUser().id).subscribe(
      {
        next: (value) => {
          this.currentUser = value;
        },
        error: (err) => {
          console.error(err);
        }
      }
    );
    this.getArtistList()
  }

  getArtistList(){
    this.artistService.getArtistsCollection().subscribe({
      next: value => {
        this.artistsList = value ;
        console.log(value)
      },
      error: err => console.log(err)
    })
  }

}
