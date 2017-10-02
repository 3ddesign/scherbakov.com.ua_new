import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent  {
  @Output() public close: any = new EventEmitter();
  @Output() public toggleForm: any = new EventEmitter();
  @Output() public recover: any = new EventEmitter();


  public closeModal(event: Event): void {
    if (event.target === event.currentTarget) {
      this.close.emit(null);
    }
  }

  public signIn(): void {
    this.close.emit(null);
    document.getElementsByClassName('login-mnu')[0].classList.toggle('hidden');
    document.getElementsByClassName('usr-mnu')[0].classList.toggle('hidden');
    document.getElementsByClassName('humburger')[0].classList.toggle('h-mod');
  }

  public switchSignUp(): void {
    this.close.emit(null);
    this.toggleForm.emit(null);
  }

  public switchRecover(): void {
    this.close.emit(null);
    this.recover.emit(null);
  }
}
