import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


// type User = {
//   id:string;
//   avatar:string;
//   name:string;
// }

interface User{
    id:string;
  avatar:string;
  name:string;
}


const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!:User;
  @Output() select = new EventEmitter<string>()

  
  /*@Input({required:true}) user!:{
    id:string;
    avatar:string;
    name:string;
  };*/

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }


  //decorator
  /*@Input() id!:string;
  @Input() avatar!:string;
  @Input({required:true}) name!:string;*/
  //@Output() select = new EventEmitter<string>();

  //select = output<string>();

  /*get imagePath(){
    return 'assets/users/' + this.avatar
  }

  onSelectUser() {
    this.select.emit(this.id)
  }*/

  //signals
  //avatar = input.required<string>();
  //name = input.required<string>();

  //imagePath = computed(() => 'assets/users/' +this.avatar());

  
  /* selectedUser = signal(DUMMY_USERS[randomNumber]);
  imagePath = computed(() => 'assets/users/' +this.selectedUser().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser(){
    //console.log('clicked');
    const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length)
    //this.selectedUser = DUMMY_USERS[randomNumber];
    this.selectedUser.set(DUMMY_USERS[randomNumber])
  } */
}
