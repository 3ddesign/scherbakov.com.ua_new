import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent {
  @Output() public close: any = new EventEmitter();
  public closeModal(event: Event): void {
    if (event.target === event.currentTarget) {
      this.close.emit(null);
    }
  }

  public SavedIn(): void {
    this.blinkNotification(1000);
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
