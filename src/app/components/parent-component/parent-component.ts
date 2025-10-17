import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Services } from '../../services/services';

@Component({
  selector: 'app-parent-component',
  standalone: false,
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css'
})
export class ParentComponent {

 messageFromChild: string = '';
  userName: string = "username"

  messageFromService: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private Services: Services) {}

  ngOnInit(): void {
    this.subscription = this.Services.currentMessage.subscribe((message: string) => {
      this.messageFromService = message;
    });
  }
  updateServiceMessage() {
    const newMessage = `Parent updated message at ${new Date().toLocaleTimeString()}`;
    this.Services.changeMessage(newMessage);
  }

  receiveMessage($event: string) {
    this.messageFromChild = $event;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
