import { Injectable } from '@angular/core';

import { User } from "./User";
import { ImgConstant } from "./constants";
import { ColorGenerator } from "./colorGenerator";

@Injectable({
  providedIn: 'root'
})
export class ImgUtilService {

  constructor() { }

  static getKeyToDisplayImage(user: User): string {
    if(user.url != null) {
      return ImgConstant.URL;
    } else if(user.name) {
      return ImgConstant.NAME;
    } else if(user.email) {
      return ImgConstant.EMAIL;
    }
  }

  static setProfileImage(imgElement:HTMLElement, user: User) {
    let imgKey = this.getKeyToDisplayImage(user);
    if(imgKey == ImgConstant.URL) {
      imgElement.firstElementChild.setAttribute('src', user[imgKey]);
    } else if(imgKey == ImgConstant.NAME || imgKey == ImgConstant.EMAIL) {
      imgElement.setAttribute('src', '');
      imgElement.innerText = user[imgKey].charAt(0).toUpperCase();
      imgElement.classList.add('createImg');
      imgElement.style.backgroundColor = ColorGenerator.generateColor();
    }
  }

}
