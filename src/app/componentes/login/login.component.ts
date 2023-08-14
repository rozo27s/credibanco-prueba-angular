import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/servicio/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  messagePassword: string = 'UperCase, LowerCase and numbers';

  profileForm = this.fb.group({
    email: ['', Validators.required], 
    password: ['', [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
                    Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private service: ProfileService,
    private router: Router) {
}

  ngOnInit(): void {
  }

  validateLogin(): void {
    this.service.getLogin(this.profileForm.value).subscribe((data: any) => {
      console.log(data)
    if (data !== null) {
          this.router.navigate(['principal'])
    } else {
      alert('Email or password not found');
    };
  });
  }

}
