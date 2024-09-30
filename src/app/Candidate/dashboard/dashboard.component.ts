import { Component } from '@angular/core';
import { SendToHeaderService } from '../../services/send-to-header.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  candidateName: string = "xxx";
  expiryDate: Date = new Date()
  
  constructor(private sendToHeader: SendToHeaderService) { 
    this.sendToHeader.setDate(this.expiryDate);
    this.sendToHeader.setName(this.candidateName);
  }
}
