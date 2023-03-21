import { Component } from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user: any
  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.user = this.storageService.getUser();
  }
}
