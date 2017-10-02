import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../scss/app.scss']
})
export class IndexComponent implements OnInit {

  public ngOnInit() {
    const headerCont: any = document.getElementById('head');
    headerCont.removeAttribute('class');
    const footerCont: any = document.getElementById('main-footer');
    footerCont.removeAttribute('class');
  }

}
