import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal} from 'bootstrap';

@Component({
  selector: 'app-pop-ups',
  standalone: true,
  imports: [],
  templateUrl: './pop-ups.component.html',
  styleUrl: './pop-ups.component.css'
})
export class PopUpsComponent implements AfterViewInit{
  // activeModal = inject(NgbActiveModal);
  @ViewChild('modal') modal?: ElementRef
  shareObject!: Modal;
  @Input() Heading: any;
  @Input() Content: any;

  constructor(private route: Router) { }

  ngAfterViewInit(): void {
    console.log("initZone");
    
   this.shareObject = new Modal(this.modal?.nativeElement)
  }

  open(): void {
    this.shareObject.show()
  }

  confirm = () => {
    this.shareObject.hide()
    this.route.navigateByUrl("candidate/login")
  }

}
