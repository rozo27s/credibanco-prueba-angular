import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/servicio/profile.service';
import { StorageService } from 'src/app/servicio/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  messagePassword: string = 'UperCase, LowerCase and numbers';

  profileForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
    private service: ProfileService,
    private router: Router,
    private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.storageService.clearStorage();
  }

  validateLogin(): void {
    this.service.getLogin(this.profileForm.value).subscribe((data: any) => {
      if (data !== null) {
        this.storageService.setLocalStorage(environment.keyData, JSON.stringify(data));
        this.router.navigate(['principal'])
      } else {
        alert('Email or password not found');
      };
    });
  }

}
