import { Routes } from '@angular/router';
import { CandidateLoginComponent } from './Candidate/candidate-login/candidate-login.component';
import { DashboardComponent } from './Candidate/dashboard/dashboard.component';
import { ResetPasswordComponent } from './Candidate/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Candidate/forgot-password/forgot-password.component';
import { OfferLetterComponent } from './Candidate/offer-letter/offer-letter.component';
import { LogOutComponent } from './Candidate/log-out/log-out.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'candidate/login', pathMatch: 'full'
    },
    {
        path: 'candidate/login', component: CandidateLoginComponent
    },
    {
        path: 'candidate/dashboard', component: DashboardComponent
    },
    {
        path: 'candidate/reset-password', component: ResetPasswordComponent
    },
    {
        path: 'candidate/forgot-password', component: ForgotPasswordComponent
    },
    {
        path: 'candidate/offer-letter', component: OfferLetterComponent
    },
    {
        path: 'candidate/logout', component: LogOutComponent
    },
];

