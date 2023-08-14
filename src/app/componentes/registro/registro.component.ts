import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/servicio/profile.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  messagePassword: string = 'UperCase, LowerCase and numbers';

  profileForm = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
                    Validators.required]],
    passwordConfirm: ['', [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
                           Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private service: ProfileService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveProfile(): void {
    if (this.validationPass('password', 'passwordConfirm')) {
      console.log("control, matchingControl");
      this.service.newProfile(this.profileForm.value).subscribe((data: any) => {
        this.profileForm.reset
        alert("Save succesfull profile");
        this.router.navigate(['login'])
      },
      (error: any) => {
        alert(error.error.responseStatus.mensaje);
      }
      );
    } else {
      alert("Las contraseñas no coinciden");
    }
  }

  validationPass(password: string, passwordConfirm: string) {
    const control = this.profileForm.get(password)?.touched;
    const matchingControl = this.profileForm.get(passwordConfirm)?.value;
    if (password.toString === passwordConfirm.toString) {
      return true;
    } else {
      return false;
    }
  }

}
