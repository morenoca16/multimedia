import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string="";
  password: string="";

  constructor(public toastController: ToastController, private router: Router) { }

  login() {
    this.validateLogin(this.username, this.password).then((isValid) => {
      if (isValid) {
        // Aquí puedes redirigir al usuario a la página principal o dashboard
        this.showToast('Inicio de sesión exitoso');
        this.router.navigate(['/home']);
      } else {
        this.showToast('Usuario o contraseña incorrectos');
      }
    });
  }

  // Simulación de validación con un backend
  validateLogin(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      // Supongamos que el usuario es 'admin' y la contraseña es '1234'
      if (username === 'admin' && password === '1234') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  
}
