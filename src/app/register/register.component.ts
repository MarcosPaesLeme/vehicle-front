import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) { }

  form: FormGroup;
  hide: any;

  ngOnInit() {
    this.formInit();
  }

  formInit(){
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
    })
  }

  registerUser(){
    this.authService.register(this.form.value)
    .subscribe(
      res => {
        if (res && res.token &&res.user) {
          localStorage.setItem('token', JSON.stringify(res.token));
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/list']);
        }
      },
      err => {
        this._snackBar.open('Usuário ou senha incorretos', 'Tente novamente', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: ['red-snackbar']
        });
        this.formInit();
      }
    )    
  }

  showInvalidFeedback(fieldPath: string) {
    const control = this.form.get(fieldPath);
    return !control.valid && control.touched;
  }

  comeBack() {
    this.router.navigate(['/'])
  }

}
