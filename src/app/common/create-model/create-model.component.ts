import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrl: './create-model.component.scss'
})
export class CreateModelComponent {
  user = { name: '', email: '' }; 

  @Output() userAdded = new EventEmitter<any>();

  saveUser() {
    if (this.user.name && this.user.email) {
      this.userAdded.emit(this.user);
      this.resetForm();
    }
  }

  resetForm() {
    this.user = { name: '', email: '' };
  }
}
