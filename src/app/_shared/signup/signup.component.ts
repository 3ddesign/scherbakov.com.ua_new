import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Output() public close: any = new EventEmitter();
  @Output() public toggleForm: any = new EventEmitter();

  public constructor() {
  }

  public closeModal(event: Event): void {
    if (event.target === event.currentTarget) {
      this.close.emit(null);
    }
  }

  public signUp(): void {
    this.blinkNotification(1000);

  }

  public switchLogIn(): void {
    this.close.emit(null);
    this.toggleForm.emit(null);
  }
// TODO: to clear:
  public blinkNotification(time: number): any {
    document.getElementById('modal').classList.toggle('hidden');
    document.getElementById('email-notification').classList.toggle('hidden');
    setTimeout(function (): void {
      document.getElementById('modal').classList.toggle('hidden');
      document.getElementById('email-notification').classList.toggle('hidden');
      document.getElementById('modal-window').remove();
      document.getElementsByClassName('login-mnu')[0].classList.toggle('hidden');
      document.getElementsByClassName('usr-mnu')[0].classList.toggle('hidden');
      document.getElementsByClassName('humburger')[0].classList.toggle('h-mod');
    }, time);

  }
}
