import { ViewContainer } from './../viewContainer.directive';
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';
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
  constructor(
    private userService: UserService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  users: User[] = [];
  showConfirmDeleteComponent: boolean = false;
  userToDelete: User;
  @ViewChild(ViewContainer, { static: false }) container: ViewContainer;

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  OnDeleteClicked(user: User) {
    // this.showConfirmDeleteComponent = true;
    this.userToDelete = user;
    this.showConfirmDelete(this.userToDelete);
  }

  OnUserDeletionConfirmed(value: boolean) {
    this.showConfirmDeleteComponent = false;
    if (value) {
      // Delete the user
      let index = this.userService.users.indexOf(this.userToDelete);
      this.userService.users.splice(index, 1);
    }
  }

  showConfirmDelete(user: User) {
    // 1. Create an instance of ConfirmDelete
    const confirmDeleteComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        ConfirmDeleteComponent
      );

    const containerViewRef = this.container.ViewContainer;
    containerViewRef.clear();

    // Rendering the component in the DOM
    containerViewRef.createComponent(confirmDeleteComponentFactory);
  }
}
