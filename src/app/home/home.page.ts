import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router , public http: HttpClient) {}

  registro(){
    this.router.navigate(['./registro'])
  }
  listado(){
    this.router.navigate(['./lista'])
  }
  camara(){
    this.router.navigate(['./info'])
  }
  reprod(){
    this.router.navigate(['./reprod'])
  }
}
