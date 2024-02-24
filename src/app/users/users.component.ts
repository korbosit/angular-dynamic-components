import { Component, OnInit } from '@angular/core';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { User } from '../Models/User';
import { UserService } from '../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ConfirmDeleteComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: User[] = [];
  showConfirmDeleteComponent: boolean = false;
  userToDelete: User;

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  OnDeleteClicked(user: User) {
    this.showConfirmDeleteComponent = true;
    this.userToDelete = user;
  }

  OnUserDeletionConfirmed(value: boolean) {
    this.showConfirmDeleteComponent = false;
    if (value) {
      // Delete the user
      let index = this.userService.users.indexOf(this.userToDelete);
      this.userService.users.splice(index, 1);
    }
  }
}
