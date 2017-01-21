// app/auth.service.ts

import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('hyqJd1hFmZeXGFxGz0lr4PijZimhHjy9', 'broabect.auth0.com', {});

 //Store profile object in auth class
  userProfile: any;

  constructor() {
    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for the Lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      console.log(authResult);
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          // Handle error
          console.log(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        console.log(profile);
      });
    });
  }


  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  }

  public isAdmin() {
    return this.userProfile && this.userProfile.appMetadata
      && this.userProfile.appMetadata.roles
      && this.objIndexOf(this.userProfile.appMetadata.roles, 'admin');
  }

  private objIndexOf(a: Object, target: any){
    for(let i = 0; a[i]; i+=1){
      if(a[i] === target){
        return true;
      }
    }
    return false;
  }

}