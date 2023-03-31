import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {Artist} from "../../models/artist.model";
import {StorageService} from "../../services/storage.service";
import {UserService} from "../../services/user.service";
import {ArtistService} from "../../services/artist.service";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent {

  currentUser! : User ;

  newArtist: Artist = {
    id: 0,
    name:'',
    photoLink:'',
    type:''
  }

  successStep1: boolean = false
  successStep2: boolean = false

  searchZone : string = ''


  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private artistService: ArtistService,

    private spotifyService: SpotifyService
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
  }

  onSearchPhoto() {
    this.spotifyService.getSearchResponse(this.newArtist.name,this.currentUser.spotifyToken,this.searchZone).subscribe({
      next: value => {
        this.successStep1 = true ;
        this.newArtist.photoLink = JSON.parse(JSON.stringify(value)).artists.items[0].images[0].url
      }
    })
  }

  onAddArtist() {
    this.artistService.addNewArtist(this.newArtist.name,this.newArtist.photoLink,this.newArtist.type).subscribe({
      next: value => {
        console.log(value)
        this.successStep2 = true
      }
    })
  }


}
