import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from "../User";
import { ImgUtilService } from "../img.util.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private user: User;
  private canUpload: boolean;

  private json = `{
    "name": null,
    "email": "hitesh6sharma@gmail.com",
    "url": "http://res.cloudinary.com/soosoory/image/upload/v1528117655/man.png",
    "editable": true
    }`;

  constructor() { }

  ngOnInit() {
    this.styleHeader();
    this.setProfileImage(this.json);
    this.canUpload = this.uploadOrDeleteOption();
  }

  ngOnDestroy() {
    localStorage.removeItem('profileColor');
  }

  logout() {
    console.log("destroy");
    this.ngOnDestroy();
  }

  private uploadOrDeleteOption(): boolean {
    if(this.user.editable) {
      if(this.user.url) {
        return false;
      }
      
      return true;
    }

    return false;
  }

  private setProfileImage(json: string) {
    this.user = JSON.parse(json);

    let imgElement = document.getElementById("profile");
    var imgKey = ImgUtilService.setProfileImage(imgElement, this.user);

    let modalImage = document.getElementById('modal-image');
    modalImage.innerHTML = imgElement.parentElement.innerHTML;
    ImgUtilService.customizeImageModal(modalImage, imgKey);
  }
  

  private styleHeader(): void {
    let navStyle = document.getElementsByTagName("nav")[0].style;
    let baseline = document.getElementsByClassName("baseline") as HTMLCollectionOf<HTMLElement>;
        
    setInterval(()=> {
      if(window.scrollY > 20) {
        navStyle.backgroundColor = 'rgba(38, 41, 51, 0.7)';
        baseline[0].style.borderBottomWidth = '0px';
        baseline[0].style.paddingBottom = '10px';
      } else {
        navStyle.removeProperty('background-color');
        baseline[0].style.removeProperty('border-bottom-width');
        baseline[0].style.removeProperty('padding-bottom');
      }
    }, 100);
  }

}
