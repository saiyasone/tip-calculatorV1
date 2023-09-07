import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-calculator';

  tip = 5;
  tipAmount = 0;
  total = 0;

  fBill = new FormControl('', [Validators.required]);
  fPerson = new FormControl('', [Validators.required]);

  get isBill(): boolean {
    return this.fBill.errors?.['required'] || false;
  }

  setTip(data: number) {
    if (this.fBill.invalid) {
      return this.fBill.markAllAsTouched();
    }

    this.tip = data;
    this.onCalculate();
  }

  onCalculate() {
    if (this.fBill.invalid) {
      return this.fBill.markAllAsTouched();
    }

    if (this.fPerson.invalid) {
      return this.fPerson.markAllAsTouched();
    }

    if (!this.fPerson.value) {
      return this.fPerson.markAllAsTouched();
    }

    let sum = 0;
    let average = 0;
    average = (+(this.fBill.value || 0) * this.tip) / 100;
    this.tipAmount = average / +(this.fPerson.value || 0);
    sum =
      +(this.fBill.value || 0) / +(this.fPerson.value || 0) + this.tipAmount;
    this.total = sum;
  }

  onReset() {
    this.tip = 5;
    this.tipAmount = 0;
    this.total = 0;
    this.fPerson.setValue('');
    this.fBill.setValue('');
  }
}
