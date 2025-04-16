import { Routes } from '@angular/router';
import { HomeComponent } from './artisans/home/home.component';
import { ChatComponent } from './artisans/chat-artisan/chat.component';
import { AllPostComponent } from './artisans/allpost-artisan/all-post.component';
import { OfferArtisanComponent } from './artisans/offer-artisan/offer-artisan.component';
import { ArtisansComponent } from './artisans/artisans.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './auth/login/login.component';
import {CreateAccountComponent} from './auth/create-account/create-account.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {OtpVerificationComponent} from './auth/otp-verification/otp-verification.component';
import {NewPasswordComponent} from './auth/new-password/new-password.component';
import {AdminComponent} from './admin/admin.component';
import {HomeAdminComponent} from './admin/home-admin/home-admin.component';
import {UserAdminComponent} from './admin/user-admin/user-admin.component';
import {ManageUsersComponent} from './admin/manage-users/manage-users.component';
import {ManageBidsComponent} from './admin/manage-bids/manage-bids.component';

export const routes: Routes = [

  {
    path: '',
    component:AuthComponent ,
    children: [
      { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
      {path: 'welcomepage',component: WelcomePageComponent},
      {path:'login',component: LoginComponent},
      {path: 'createaccount',component: CreateAccountComponent},
      {path: 'forgotpassword',component: ForgotPasswordComponent},
      {path: 'verification',component: OtpVerificationComponent},
      {path:'newpassword',component: NewPasswordComponent}



    ],
  },
  {

    path: 'artisans-dashboard',
    component: ArtisansComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'all-posts', component: AllPostComponent },
      { path: 'offers', component: OfferArtisanComponent }
    ]

  },
  {
path:'admin-dashboard',
    component:AdminComponent,
    children:[

      {path: '', redirectTo: 'home-admin', pathMatch: 'full'},
      {path:'home-admin',component:HomeAdminComponent},
      {path:'all-post-admin',component: UserAdminComponent},
      {path:'manage-user',component: ManageUsersComponent},
      {path:'manage-bids', component: ManageBidsComponent}
    ]

  },

];
