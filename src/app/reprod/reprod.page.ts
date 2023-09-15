import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-reprod',
  templateUrl: './reprod.page.html',
  styleUrls: ['./reprod.page.scss'],
})
export class ReprodPage implements OnInit {

  public showContent = false
  audioPlaying: boolean = false;
  videoPlaying: boolean = false;
  audioPlaying1: boolean = false;
  videoPlaying1: boolean = false;
  audioPlaying2: boolean = false;
  videoPlaying2: boolean = false;
  audioPlaying3: boolean = false;
  videoPlaying3: boolean = false;
  audioPlaying4: boolean = false;
  videoPlaying4: boolean = false;
  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit() {
  }
  playMusic() {
    this.audioPlaying = true;
    this.videoPlaying = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }

  playVideo() {
    this.audioPlaying = false;
    this.videoPlaying = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }
  
  playMusic1() {
    this.audioPlaying1 = true;
    this.videoPlaying1 = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }

  playVideo1() {
    this.audioPlaying1 = false;
    this.videoPlaying1 = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }

  playMusic2() {
    this.audioPlaying2 = true;
    this.videoPlaying2 = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }

  playVideo2() {
    this.audioPlaying2 = false;
    this.videoPlaying2 = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }

  playMusic3() {
    this.audioPlaying3 = true;
    this.videoPlaying3 = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }

  playVideo3() {
    this.audioPlaying3 = false;
    this.videoPlaying3 = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }

  playMusic4() {
    this.audioPlaying4 = true;
    this.videoPlaying4 = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }

  playVideo4() {
    this.audioPlaying4 = false;
    this.videoPlaying4 = true;
    // Aquí puedes agregar lógica adicional si es necesario
  }
}

