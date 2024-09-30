import { Component, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpsComponent } from '../../pop-ups/pop-ups.component';
import { Router } from '@angular/router';
import { VisitCountService } from '../../services/visit-count.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [PopUpsComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  
  // private modalService = inject(NgbModal);
  Heading: any
  Content: any
  showP: boolean = false
  showCp: boolean = false
  @ViewChild(PopUpsComponent) modal?: PopUpsComponent
  constructor(private route: Router, private visit: VisitCountService){}

  Cancel = () => {
    this.route.navigateByUrl('candidate/login')
  }

  Submit = () => {
    this.visit.setcount()
    this.Heading = "Password Updated Successfully"
    this.Content = "Please login with your Email ID and new Password."
    this.modal?.open()
    // const modalRef = this.modalService.open(PopUpsComponent, { centered: true });
    // modalRef.componentInstance.Heading = 'Password Updated Successfully';
    // modalRef.componentInstance.Content = 'Please login with your Email ID and new Password.';
  }

}
