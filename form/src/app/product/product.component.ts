import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  prodId=0;
  photoId=0;
  constructor(private ActivatedRoute: ActivatedRoute){
    this.ActivatedRoute.params.subscribe((params)=>{
      const interValue = params;
      this.photoId=interValue['photoId'];
      this.prodId=interValue['prodId'];
    })

  }

}
