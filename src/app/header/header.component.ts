import { Component, OnInit } from '@angular/core';

import { User } from "../User";
import { ImgUtilService } from "../img.util.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private json = `{
    "name": null,
    "email": "hitesh6sharma@gmail.com",
    "url": null,
    "editable": true
    }`;

  constructor() { }

  ngOnInit() {
    this.styleHeader();
    this.setProfileImage(this.json);
  }

  private setProfileImage(json: string) {
    let user: User = JSON.parse(json);

    let imgElement = document.getElementById("profile");
    ImgUtilService.setProfileImage(imgElement, user);
  }

  private styleHeader(): void {
    setInterval(()=> {
      let navStyle = document.getElementsByTagName("nav")[0].style;
      let baseline = document.getElementsByClassName("baseline") as HTMLCollectionOf<HTMLElement>;
      
      if(window.scrollY > 20) {
        navStyle.backgroundColor = '#262933';
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
