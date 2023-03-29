import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {StorageService} from "../../services/storage.service";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  currentUser! : User ;

  hasUsernameChanged : boolean = false ;

  constructor(private storageService: StorageService,private http: HttpClient, public userService: UserService, private router:Router) {
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

  onChangeUsername() {
    this.userService.changeUsername(this.currentUser.id,this.currentUser.username).subscribe({
      next: value => {
        this.hasUsernameChanged = true ;
        console.log(value);
      }
    });
  }
}
