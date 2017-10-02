import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../scss/app.scss'],

})
export class HeaderComponent {
  public signInOn: boolean = false;
  public signUpOn: boolean = false;
  public recoverPassOn: boolean = false;


  public onLogin(): void {
    this.signInOn = !this.signInOn;
  }

  public onRegister(): void {
    this.signUpOn = !this.signUpOn;
  }

  public onRecover(): void {
    this.recoverPassOn = !this.recoverPassOn;
  }

  public showMnu(event: any): void {
    document.getElementsByClassName('hamb-ico')[0].classList.toggle('hamb-active');
  }

  public onLogout(): void {
    localStorage.removeItem('token');
  }

  public switchLogIn(): void {
    this.signInOn = !this.signInOn;
  }
  public switchSignUp(): void {
    this.signUpOn = !this.signUpOn;
  }
  public switchRecover(): void {
    this.recoverPassOn = !this.recoverPassOn;
  }
}
