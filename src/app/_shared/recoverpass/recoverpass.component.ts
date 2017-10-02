import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.component.html',
  styleUrls: ['./recoverpass.component.scss']
})
export class RecoverpassComponent {
  @Output() public close: any = new EventEmitter();
  @Output() public toggleForm: any = new EventEmitter();


  public closeModal(event: Event): void {
    if (event.target === event.currentTarget) {
      this.close.emit(null);
    }
  }

  public SendIn(): void {
    this.blinkNotification(1000);
  }

  public switchSignUp(): void {
    this.close.emit(null);
    this.toggleForm.emit(null);
  }

  public blinkNotification(time: number): any {
    document.getElementById('modal').classList.toggle('hidden');
    document.getElementById('email-notification').classList.toggle('hidden');
    setTimeout(function (): void {
      document.getElementById('modal').classList.toggle('hidden');
      document.getElementById('email-notification').classList.toggle('hidden');
      document.getElementById('modal-window').remove();
    }, time);
  }
}
