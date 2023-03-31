import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./components/home/home.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {AccountComponent} from "./components/account/account.component";
import {ArtistsListComponent} from "./components/artists-list/artists-list.component";
import {AddArtistComponent} from "./components/add-artist/add-artist.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: RegistrationComponent },
  { path: 'account', component: AccountComponent },
  { path: 'artists', component: ArtistsListComponent},
  { path: 'artists/add', component: AddArtistComponent}




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
