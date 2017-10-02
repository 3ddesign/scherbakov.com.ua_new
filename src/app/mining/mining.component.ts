import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['../../scss/app.scss']
})
export class MiningComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    const headerCont: any = document.getElementById('head');
    headerCont.setAttribute('class', 'index-header');
    const footerCont: any = document.getElementById('main-footer');
    footerCont.removeAttribute('class');
  }

}
