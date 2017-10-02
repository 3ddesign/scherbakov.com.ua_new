import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../scss/app.scss'],
})
export class ProfileComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    const headerCont: any = document.getElementById('head');
    headerCont.setAttribute('class', 'index-header');
  }

  public onLogout(): any {
    document.getElementsByClassName('login-mnu')[0].classList.toggle('hidden');
    document.getElementsByClassName('usr-mnu')[0].classList.toggle('hidden');
    document.getElementsByClassName('humburger')[0].classList.toggle('h-mod');
  }

}
