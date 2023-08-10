import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formController!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    // @ts-ignore
    this.formController = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passForm: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required])
      }, {validators : this.confirmPassword}),
      age: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });
  }

  confirmPassword(control: AbstractControl): ValidationErrors | null {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ passwordMismatch: true });
    } else {
      return null;
    }
  }

  onSubmit() {
    console.log(this.formController);
  }
}
