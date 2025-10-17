import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Services } from '../../services/services';

@Component({
  selector: 'app-child-component',
  standalone: false,
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent implements OnInit, OnDestroy {

  @Input() userName: string = ""
  @Output() messageEvent = new EventEmitter<string>();

  messageToSend: string = ""

  messageFromService: string = "";

  private subscription!: Subscription;

  constructor(private dataService: Services) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe((message: string) => {
      this.messageFromService = message;
    });
  }

  sendMessageToParent() {
    this.messageEvent.emit(this.messageToSend);
  }

  updateServiceMessage() {
    const newMessage = `Child updated the message!`
    this.dataService.changeMessage(newMessage);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
