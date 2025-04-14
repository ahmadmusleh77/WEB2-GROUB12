import { Component } from '@angular/core';


@Component({
  selector: 'app-footer-artisan',
  imports: [
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  companyLinks = [
    { title: 'Contact Us', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Available Jobs', url: '#' },
    { title: 'Frequently Asked Questions', url: '#' }
  ];

  serviceLinks = [
    { title: 'Find a Craftsman', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'View Services', url: '#' },
    { title: 'Rating Craftsmen', url: '#' }
  ];

  benefitLinks = [
    { title: 'New User', url: '#' },
    { title: 'Registered Professionals', url: '#' },
    { title: 'User Certificates', url: '#' }
  ];

  additionalLinks = [
    { title: 'Privacy Policy', url: '#' },
    { title: 'Terms of Use', url: '#' },
    { title: 'Technical Support', url: '#' }
  ];

}
