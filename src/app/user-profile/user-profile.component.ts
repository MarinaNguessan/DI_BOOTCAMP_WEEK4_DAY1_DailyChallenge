import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    firstName: "N'GUESSAN",
    lastName: 'Marina',
    profilePictureUrl: 'assets/photo.jpg'
  };
  get profileUser(){
    return this.user.profilePictureUrl
  }

  get FullName() {
    return this.user.firstName + ' ' + this.user.lastName;
  }
}