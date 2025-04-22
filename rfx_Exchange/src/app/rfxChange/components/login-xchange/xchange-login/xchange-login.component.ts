import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authServices/authentication.service';

@Component({
  selector: 'app-xchange-login',
  standalone: true,
  imports: [],
  templateUrl: './xchange-login.component.html',
  styleUrl: './xchange-login.component.css'
})
export class XchangeLoginComponent implements OnInit {

    loginForm:FormGroup = new FormGroup({});
    loading = false;
    submitted = false;
    returnUrl: string = '';
    error = '';

    
    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) {   
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
  }

  ngOnInit(): void {
    console.log('inside login');
      this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f['username'].value, this.f['password'].value)
        .pipe(first())
        .subscribe({
          next: data => {
              this.router.navigate([this.returnUrl]);
          },
          error: error => {
              this.error = error;
              this.loading = false;
          }
      });
}

}
