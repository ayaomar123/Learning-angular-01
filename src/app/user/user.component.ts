import { Component, Signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomNumber];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }

  onSelectUser(){
    console.log('clicked');
    const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomNumber];
  }
}
