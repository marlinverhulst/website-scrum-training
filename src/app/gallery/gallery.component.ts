import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public mainPic = './assets/images/home1.jpg';

  public pic1 = './assets/images/home1.jpg';
  public pic2 = './assets/images/cartoon-olifant-1.jpg';
  public pic3 = './assets/images/horton.jpg';
  public pic4 = './assets/images/JanVis.jpg';

  constructor() { }

  ngOnInit() {
  }

  setMainPicture(jpg: string) {
    this.mainPic = jpg;
  }
}
