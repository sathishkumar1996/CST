import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import html2PDF from 'jspdf-html2canvas';
import { SendToHeaderService } from '../../services/send-to-header.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-letter',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NgbTooltipModule, CommonModule, NgbDropdownModule],
  templateUrl: './offer-letter.component.html',
  styleUrl: './offer-letter.component.css'
})
export class OfferLetterComponent implements OnInit {

  public size1024 = false
  date: Date | undefined;
  print = false
  subscription!: Subscription;
  @ViewChild('htmlToPdf') parent!: ElementRef
  @ViewChild('htmlToPdf1') page1!: ElementRef
  @ViewChild('htmlToPdf2') page2!: ElementRef
  @ViewChild('htmlToPdf3') page3!: ElementRef
  previousURL?: string
  constructor(
    private sendToHeader: SendToHeaderService, 
    private route: Router) {
    this.previousURL = this.route.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
    }
  
  ngOnInit(): void {
    if (window.innerWidth >= 1024) {
      this.size1024 = true
    } else {
      this.size1024 = false
    }
    this.subscription = this.sendToHeader.date$.subscribe(date => {
      console.log(date);
      
      this.date = date;
    });
  }

  GoBack = () => {    
    if(this.previousURL){
      this.route.navigateByUrl(this.previousURL)
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth >= 1024) {
      this.size1024 = true
    } else {
      this.size1024 = false
    }
  }

  bannerDate = `Sep 05, 2024`
  fullname = `Cameron Smith`
  Name = `Cameron`
  Role = `Brand Manager`
  Location = `Lakea Country, IL`
  startDate = `November 1, 2024`
  Manager = `John Jones`
  Attachments = `Total Rewards brochure`
  offerSummaryDate = `May 2, 2024`
  totalAnnualCashCompensation = `226,000`
  annualizedBasePay = `**,***`
  shiftDifferentialTarget = `**,***`
  annualIncentivePlanTarget = `**,***`
  targetAnnualEquityGrant = `24,000`
  Benifits = `40,000`
  Allowances = `6,000`
  carAllowance = `**,***`
  Allowance2 = `**,***`
  Allowance3 = `**,***`
  Allowance4 = `**,***`
  Allowance5 = `**,***`
  Total = `296,000`

  gridItemYos = [{
    Title: `34`,
    subTitle: `Days Off`,
    Description: `xx Vacations, xx Holidays/Personal days, xx Volunteer`
  },
  {
    Title: `Company-Leased Car`,
    Description: `Your role includes a car, isurance and scheduled maintenance`
  }
  ]

  oneTimeRewards: any = [{
    Title: `250 RSUs`,
    subTitle: `Interim Equity Grant`,
    Description: `Awarded if start date is on or before the last day of the quarter. 
    Subject to a 3 year vesting schedule.`
  },
  {
    Title: `$10,000 in RSUs`,
    subTitle: `Target Value at Grant`,
    Description: `Granted in the next quarter following your start date.  Subject to a 3-year ratable vesting schedule. Actual number of RSUs are determined based on AbbVie's stock price on grant date.`
  },
  {
    Title: `$35,000`,
    subTitle: `Sign-On Bonus`,
    Paid: ['May 1, 2024', 'Jun 1, 2024', 'Jul 1, 2024'],
    Amount: ['$20,000', '$10,000', '$5,000']
  },
  {
    Title: `Relocation`,
    subTitle: `View Brochure`,
    Description: `Relocation benefits to help support your move.`
  },]

  otherValuableBenifits = [{
    icon: "../../../assets/Images/Hands holding heart icon 1.svg",
    Title: "Supportive leave programs",
    Description: `Paid caregiver, maternity and gender-neutral parental leaves to put loved ones first.`,
    Color: `purple`
  },
  {
    icon: "../../../assets/Images/Leaf 2 icon.svg",
    Title: "Quarterly dividends equivalents",
    Description: `Get paid on your unvested, outstanding RSUs if Abbvie pays dividends
    in that
    quarter.`,
    Color: `green`
  },
  {
    icon: "../../../assets/Images/Spark icon 1.svg",
    Title: "Great 401(K) match + annual contribution",
    Description: `Get a $1:1 match, up to 6$, plus 2-7% based on age and years of
    Abbvie service,
    subject to
    vesting.`,
    Color: `orange`
  },
  {
    icon: "../../../assets/Images/Healthcare professional 1 icon 1.svg",
    Title: "Benifits navigation and advocacy",
    Description: `Get the care you need, when you need it, including personalized
    cancer support.`,
    Color: `purple`
  },
  {
    icon: "../../../assets/Images/Calendar icon 1.svg",
    Title: "Longer weekends",
    Description: `To maximize time off, we schedule many of our company-designated
    holidays around
    holiday
    weekends.`,
    Color: `green`
  },
  {
    icon: "../../../assets/Images/Work from home icon 1.svg",
    Title: "Workplace flexibility support",
    Description: `Team set their own flexible work norms so you, your team and Abbvie
    benfit.`,
    Color: `orange`
  },
  ]

  printSummary = () => {
    this.print = true

    setTimeout(async () => {
      const pdf = await html2PDF([this.page1.nativeElement, this.page2.nativeElement, this.page3.nativeElement], {
        jsPDF: {
          format: 'a4',
        },
        imageType: 'image/jpeg',
        watermark({ pdf, pageNumber, totalPageNumber }) {
          // pdf: jsPDF instance
          pdf.setTextColor('#292b2db3');
          pdf.setFontSize(8)
          pdf.text(`${pageNumber}`, pdf.internal.pageSize.width - 40, pdf.internal.pageSize.height - 20);
        },
        success: function (pdf) {
          const pdfBlob = pdf.output('blob');
          const pdfUrl = URL.createObjectURL(pdfBlob);
          console.log(pdfUrl)
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = 'jsPdf.pdf';
          window.open(pdfUrl, '_blank');
        }
      })
      this.print = false
    }, 200);
  }

}
