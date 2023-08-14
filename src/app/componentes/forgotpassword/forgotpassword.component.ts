import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/servicio/profile.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]]
  });

  constructor(private fb: FormBuilder,
    private service: ProfileService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  validateLogin(): void {
    this.service.rememberPass(this.profileForm.value).subscribe((data: any) => {
        this.profileForm.reset;
        alert('The recovery email associated with the account has been sent');
        this.router.navigate(['login'])
    },
    (error: any) => {
      alert('Error send notofication');
  });
  }
}