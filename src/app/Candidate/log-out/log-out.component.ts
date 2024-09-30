import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SendToHeaderService } from '../../services/send-to-header.service';

@Component({
  selector: 'app-log-out',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent {


  constructor(private sendToHeader: SendToHeaderService){
    this.sendToHeader.setDate('');
    this.sendToHeader.setName('');
  }

}
