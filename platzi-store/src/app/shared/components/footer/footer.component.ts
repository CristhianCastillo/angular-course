import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailFiled: FormControl;

  constructor() {
    this.emailFiled = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.emailFiled.valueChanges.subscribe((value) => {
      console.log('Value: ', value);
    });
  }

  ngOnInit(): void {}

  public sendEmail(): void {
    if (this.emailFiled.valid) {
      console.log('Email sended:', this.emailFiled.value);
    }
  }
}
