import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestemonialComponent } from './testemonial/testemonial.component';

import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouteguardService } from './routeguard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';

  const routes: Routes = [
    
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path: 'Home', component: HeaderComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Signup', component: SignupComponent},
    {path: 'Contactus', component: ContactusComponent},
    {path: 'About', component: IntroComponent},
    {path: 'Gallery', component: GalleryComponent},
    {path: 'Services', component: ContentComponent},
    {path: 'Testimonials', component: TestemonialComponent},
    {path: 'Clients', component: ClientsComponent, canActivate: [RouteguardService]},
    {path: 'Pricing', component: PricingComponent},
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo: '/404'},//ovo je ako ukucamo url koji ne postoji ,vodi nas na 404 page
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
