import { Component } from '@angular/core';
import { SendToHeaderService } from '../services/send-to-header.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  date: Date | undefined;
  name: string | undefined;
  subscription: Subscription;

  constructor(private sentToHeader: SendToHeaderService, private route: Router) {
    this.subscription = this.sentToHeader.date$.subscribe(date => {
      this.date = date;
    });
    this.subscription = this.sentToHeader.name$.subscribe(name => {
      this.name = name;
    });
  }

  logOut() {
    this.route.navigateByUrl('/candidate/logout')
  }

}
