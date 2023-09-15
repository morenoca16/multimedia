import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {

  public userData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  register() {
    localStorage.setItem('user', JSON.stringify(this.userData));
    alert('Usuario registrado con éxito!');
    this.userData = {
      name: '',
      email: '',
      password: ''
    };
  }
  back(){
    this.router.navigate(['/login'])
  }

}
