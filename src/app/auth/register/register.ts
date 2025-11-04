import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
    lastName: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
  });

  savedUsers: any[] = [
    {
      firstName: 'Mohamed',
      lastName: 'Tarek',
      imageUrl: 'dummy url',
      email: 'example@example.com',
    },
  ];
  addUser(): void {
    this.savedUsers.push(this.userForm.value);
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }
  get imageUrl() {
    return this.userForm.get('imageUrl');
  }
  get email() {
    return this.userForm.get('email');
  }
}
