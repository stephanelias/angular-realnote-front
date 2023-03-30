import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() username! : string

  constructor(private router: Router){

  }

  ngOnInit(){}

  logout() {
    window.sessionStorage.removeItem('auth-user');
    this.router.navigateByUrl('') ;
  }

}
