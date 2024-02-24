import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'confirm-delete',
  standalone: true,
  imports: [],
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.scss',
})
export class ConfirmDeleteComponent implements OnInit {
  constructor() {}

  @Input() usertoDelete: User;

  @Output()
  OnConfirmation: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {}

  OnConfirmationBtnClicked(value: boolean) {
    this.OnConfirmation.emit(value);
  }
}
