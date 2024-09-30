import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PopUpsComponent } from './pop-ups/pop-ups.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,PopUpsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  @ViewChild(PopUpsComponent) modal?: PopUpsComponent
  title = 'CandidateStatement';

  ngOnInit(): void {
    console.log(this.modal?.open());
  }

}
