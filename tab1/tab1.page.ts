import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
ImageArray:any= [];



  constructor(public navCtrl:NavController) {
    this.ImageArray = [ {'image':'../../assets/slide-one.jfif'},
    {'image':'../../assets/slide-two.jfif'},
    {'image':'../../assets/slide-three.jfif'},
    {'image':'../../assets/slide-four.jfif'},
    {'image':'../../assets/slide-five.jfif'},
    {'image':'../../assets/slide-six.jfif'},
    // {'image':'../../assets/slide-one.jfif'},
  
  ];
  }

}
