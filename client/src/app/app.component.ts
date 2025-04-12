import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MatButtonModule,
    FormsModule, ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fB = inject(FormBuilder);

  message: string = '';
  sum: number = 0;
  numbers: number[] = [2, 4, 6, 8];
  number: number = 0;

  constructor() {
    this.message = 'My name is Nil. This is my registration form.';
  }

  showNumber(num: number): void {
    this.number = num;

    console.log(this.number);
  }

  sumNumber(num1: number, num2: number, num3: number): Number {
    this.sum = num1 + num2 + num3;

    console.log(this.sum);

    return this.sum;
  }

  registerGroup = this.fB.group({
    emailCtrl: '',
    nameCtrl: '',
    passwordCtrl: ''
  });

  get EmailCtrl(): FormControl {
    return this.registerGroup.get('emailCtrl') as FormControl;
  }

  get NameCtrl(): FormControl {
    return this.registerGroup.get('nameCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.registerGroup.get('passwordCtrl') as FormControl;
  }

  register(): void {
    console.log(this.EmailCtrl.value);
    console.log(this.NameCtrl.value);
    console.log(this.PasswordCtrl.value);

    // console.log(user);
  }
}