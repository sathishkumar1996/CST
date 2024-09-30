import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpsComponent } from '../../pop-ups/pop-ups.component';
import { VisitCountService } from '../../services/visit-count.service';

@Component({
  selector: 'app-candidate-login',
  standalone: true,
  imports: [RouterModule, PopUpsComponent],
  templateUrl: './candidate-login.component.html',
  styleUrl: './candidate-login.component.css'
})
export class CandidateLoginComponent {

  // private modalService = inject(NgbModal);
  @ViewChild(PopUpsComponent) modal?: PopUpsComponent
  Heading: any
  Content: any
  show: boolean = false

  constructor(private route: Router, private visit: VisitCountService) { }

  SignIn = () => {
    console.log(this.visit.getcount())
    if (this.visit.getcount() == 1) {
      this.route.navigateByUrl('candidate/reset-password')
    } else {
      this.visit.setcount()
      this.route.navigateByUrl('candidate/dashboard')
    }
  }

  NeedAssistance() {
    this.Heading = "Need Assistance"
    this.Content = "Please contact the recruiter for any further assistance"

    this.modal?.open()
    // const modalRef = this.modalService.open(PopUpsComponent, { centered: true });
    // modalRef.componentInstance.Heading = 'Need Assistance';
    // modalRef.componentInstance.Content = 'Please contact the recruiter for any further assistance';
  }

}
