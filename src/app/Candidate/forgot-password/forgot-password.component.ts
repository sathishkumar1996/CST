import { Component, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpsComponent } from '../../pop-ups/pop-ups.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [PopUpsComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  // private modalService = inject(NgbModal);
  @ViewChild(PopUpsComponent) modal?: PopUpsComponent
  Heading: any
  Content: any
  constructor(private route: Router) { }
  
  Cancel() {
    this.route.navigateByUrl('');
  }
  
  SendLink() {
    this.Heading = "Notification"
    this.Content = "Please check you Email for the password reset link"
    
    this.modal?.open()
    // const modalRef = this.modalService.open(PopUpsComponent, { centered: true });
    // modalRef.componentInstance.Heading = 'Notification';
    // modalRef.componentInstance.Content = 'Please check you Email for the password reset link';
  }

}
