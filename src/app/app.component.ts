import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <label>
      <input type="text" [disabled]="isDisabled"  #inputRefView>
    </label>
    <label>
      <input type="text" [disabled]="isDisabled" (input)="onLocalRef(inputRef.value)" #inputRef>
    </label>
    <label>
      <input type="text" [disabled]="isDisabled" (input)="onInput($event)">
    </label>
    <label>
      <input type="text" [(ngModel)]="value" [disabled]="isDisabled">
    </label>
    <h3 *ngIf="!isDisabled; else noServer " [ngClass]="{online: true}">Server was started !!!</h3>
    <ng-template #noServer>
      <p [ngStyle]="getStyle()" [ngClass]="{online: true}">No server was stared</p>
    </ng-template>
    {{value}}

    <app-inner (addedEvent)="onAddedEvent($event)">
      <p>JOX</p>
    </app-inner>

    <div *ngFor="let server of servers">
      <p>{{server}}</p>
    </div>

    <div>
      {{input}}
    </div>



  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDisabled = true;
  value = 'Value';
  servers: Array<string> = ['A', 'B', 'C'];
  input: string;
  @ViewChild('inputRefView')
  inputRefView: ElementRef;

  getStyle(): object {
    return {
      backgroundColor: 'green'
    };
  }

  onLocalRef(input: string) {
    this.input = input;
  }

  onAddedEvent(value: string): void {
    this.servers.push(value);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
  }

  onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
  }
}
