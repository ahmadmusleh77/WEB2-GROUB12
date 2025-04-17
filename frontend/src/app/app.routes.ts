
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { HomeComponent } from './artisans/home/home.component';
import { ChatComponent } from './artisans/chat-artisan/chat.component';
import { AllPostComponent } from './artisans/allpost-artisan/all-post.component';
import { OfferArtisanComponent } from './artisans/offer-artisan/offer-artisan.component';
import { AccountProfileComponent as ArtisanAccountProfileComponent } from './artisans/profile-artisan/account-artisan/account-artisan.component';
import { SettingsComponent as ArtisanSettingsComponent } from './artisans/profile-artisan/settings-artisan/settings-artisan.component';
import { AdminComponent } from './admin/admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageBidsComponent } from './admin/manage-bids/manage-bids.component';
import { AccountProfileComponent } from './admin/profile-admin/account-admin/account-admin.component';
import { SettingsComponent } from './admin/profile-admin/settings-admin/settings-admin.component';
import {OfferJobownerComponent} from './job-owner/offer-jobowner/offer-jobowner.component';
import {JobOwnerComponent} from './job-owner/job-owner.component';
import {CreatePostComponent} from './job-owner/create-post/create-post.component';
import {EditPostComponent} from './job-owner/edit-post/edit-post.component';
import {HomeJobownersComponent} from './job-owner/home-jobowners/home-jobowners.component';
import {ManageBidsJobownerComponent} from './job-owner/manage-bids-jobowner/manage-bids-jobowner.component';
import {ChatJobOwnerComponent} from './job-owner/chat-job-owner/chat-job-owner.component';


export const routes: Routes = [

  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'welcome-page', pathMatch: 'full' },
      { path: 'welcome-page', component: WelcomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'forget-password', component: ForgotPasswordComponent },
      { path: 'verification', component: OtpVerificationComponent },
      { path: 'new-password', component: NewPasswordComponent }
    ],

  },
  {
    path: 'artisans-dashboard',
    component: ArtisansComponent,
    children: [
      { path: '', redirectTo: 'home-artisan', pathMatch: 'full' },
      { path: 'home-artisan', component: HomeComponent },
      { path: 'chat-artisan', component: ChatComponent },
      { path: 'all-posts', component: AllPostComponent },
      { path: 'offers', component: OfferArtisanComponent },
      { path: 'profile', component: ArtisanAccountProfileComponent },
      { path: 'settings', component: ArtisanSettingsComponent }
    ]
  },
  {

    path: 'admin-dashboard',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home-admin', pathMatch: 'full' },
      { path: 'home-admin', component: HomeAdminComponent },
      { path: 'all-post-admin', component: UserAdminComponent },
      { path: 'manage-user', component: ManageUsersComponent },
      { path: 'manage-bids', component: ManageBidsComponent },
      { path: 'profile', component: AccountProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  {
    path: 'job-owner-dashboard',
    component :JobOwnerComponent,
    children :[
      {path: '', redirectTo: 'home-job-owner', pathMatch: 'full'},
      { path: 'home-job-owner', component: HomeJobownersComponent },
      {path: 'offer-job-owner',component: OfferJobownerComponent},
      {path: 'creat-posts',component: CreatePostComponent},
      {path: 'edit-post',component: EditPostComponent},
      {path:'manage-bids-job-owner',component: ManageBidsJobownerComponent},
      {path:'edit-post',component: EditPostComponent},
      {path:'profile-job-owner',component:AccountProfileComponent},
      {path:'settings-job-owner',component:SettingsComponent},
      { path: 'chat-job-owner', component:ChatJobOwnerComponent},

    ]
  },

];
