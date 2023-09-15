import { HttpClient } from '@angular/common/http';
import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource,ImageOptions } from '@capacitor/camera';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  
  titulo: string="";
  descripcion: string="";
  currentDateTimes: string="";
  text: string='';
  imageElement: any;

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private router: Router , public http: HttpClient) {
    this.updateDateTime();
  }
  updateDateTime() {
    const now = new Date();
    this.currentDateTimes = now.toISOString();
  }


  goToFolder() {
    this.router.navigate(['/folder/inbox'], { 
        queryParams: { titulo: this.titulo, descripcion: this.descripcion,imageElement:this.imageElement,currentDateTimes: this.currentDateTimes}
    });
}
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
    }

  Navigate (value: any){
    this.router.navigate(['/folder'])
    console.log(value);
  }
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    this.imageElement = imageUrl;
  };
  
  back(){
    this.router.navigate(['/folder/inbox'])
  }
  
}

