import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GetapiService} from '../multimedia/getapi.service';


interface ApiResponse {
  docs: any[];
  // otras posibles propiedades...
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

 
  
  getdata: any[] = [];
  constructor(private http: HttpClient,private services: GetapiService) {
    this.services.getdata<ApiResponse>("").subscribe(data => {
      console.log(this.getdata);
      this.getdata = data.docs;
    
    })
    
  }

  ngOnInit() {}
}
