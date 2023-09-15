import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource,ImageOptions } from '@capacitor/camera';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  titulo: string="";
  descripcion: string="";
  currentDateTimes: string="";


  Descripcion: string='';
  data: any = {};
  imageElement: any;
  imageElement1: any;
  base64:any;
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  
  constructor(private router: Router , public http: HttpClient,private route: ActivatedRoute) {
    
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.titulo = params['titulo'];
        this.descripcion = params['descripcion'];
        this.imageElement=params['imageElement']
        this.currentDateTimes=params['currentDateTimes']
    });
}
  back(){ this.router.navigate(['./login']) }

  goToFolder(){this.router.navigate(['/folder/inbox'], 
    {
      queryParams: {
        imageSource: this.imageElement,
        titulo: this.titulo,
        Descripcion: this.Descripcion,
        currentDateTimes: this.currentDateTimes,
      },
    });
  }

  goToInfo(){
    this.router.navigate(['/info'])
  }
  
  
}
