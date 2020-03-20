import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-inner',
  styleUrls: ['inner.component.css'],
  template: `
    <button (click)="onClick()" >Add</button>
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class InnerComponent {
  @Output()
  addedEvent = new EventEmitter<string>();

  onClick(): void {
    this.addedEvent.emit('Value');
  }
}
