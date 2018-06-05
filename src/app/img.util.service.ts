import { Injectable } from '@angular/core';

import { User } from "./User";
import { ImgConstant } from "./constants";
import { ColorGenerator } from "./colorGenerator";

@Injectable({
  providedIn: 'root'
})
export class ImgUtilService {

  constructor() { }

  static customizeImageModal(htmlElement: HTMLElement, imgKey: string) {
    let imgElement = htmlElement.firstElementChild;

    if(imgKey == ImgConstant.NAME || imgKey == ImgConstant.EMAIL) {
      imgElement.classList.remove('createImg');
      imgElement.classList.add('bigImage');
      imgElement.setAttribute('style', imgElement.getAttribute('style').replace(' 0px 0px 3px 8px;', ' 0px 0px 2px 22px; color: #fff'));
      
    }

    imgElement.removeAttribute('data-target');
    imgElement.removeAttribute('data-toggle');
    imgElement.removeAttribute('href');

  }

  static setProfileImage(imgElement:HTMLElement, user: User) {
    let imgKey = this.getKeyToDisplayImage(user);
    
    if(imgKey == ImgConstant.URL) {
      imgElement.firstElementChild.setAttribute('src', user[imgKey]);
    
    } else if(imgKey == ImgConstant.NAME || imgKey == ImgConstant.EMAIL) {
      imgElement.setAttribute('src', '');
      imgElement.innerText = user[imgKey].charAt(0).toUpperCase();
      imgElement.classList.add('createImg');
      
      let color;
      if(localStorage.getItem('profileColor')) {
        color = localStorage.getItem('profileColor');
        
      } else {
        color = ColorGenerator.generateColor();
        localStorage.setItem('profileColor', color);

      }
      imgElement.style.backgroundColor = color;
      imgElement.style.boxShadow = color.replace('1)', '0.4)')+ ' 0px 0px 3px 8px';
    }

    return imgKey;
  }

  private static getKeyToDisplayImage(user: User): string {
    if(user.url) {
      return ImgConstant.URL;
    } else if(user.name) {
      return ImgConstant.NAME;
    } else if(user.email) {
      return ImgConstant.EMAIL;
    }
  }

}
