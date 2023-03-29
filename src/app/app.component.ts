import { Component } from '@angular/core';
import {User} from "./models/user.model";
import {StorageService} from "./services/storage.service";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RealNote';

  currentUser! : User ;

  constructor(private storageService: StorageService,private http: HttpClient, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser(this.storageService.getUser().id).subscribe(
      {
        next: (value) => {
          this.currentUser = value ;
          console.log(value) ;

        },
        error : (err) => {
          console.error(err) ;
        }
      }
    ) ;
  }
}
