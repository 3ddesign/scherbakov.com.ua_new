import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['../profile.component.scss', '../../../scss/app.scss']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    const headerCont: any = document.getElementById('head');
    headerCont.setAttribute('class', 'index-header');
    const footerCont: any = document.getElementById('main-footer');
    footerCont.setAttribute('class', 'hidden');
  }
}
