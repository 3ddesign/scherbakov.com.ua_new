import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../profile.component.scss', '../../../scss/app.scss']
})
export class SettingsComponent implements OnInit {
  public changePassOn: boolean = false;

  public onChange(): void {
    this.changePassOn = !this.changePassOn;
  }

  public onSaveSettings(): void {


  }

  public ngOnInit() {
    const headerCont: any = document.getElementById('head');
    headerCont.setAttribute('class', 'index-header');
    const footerCont: any = document.getElementById('main-footer');
    footerCont.setAttribute('class', 'hidden');
  }

}
