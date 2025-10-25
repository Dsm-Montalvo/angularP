import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOptions = [
    { label: 'Home', route: '/home' },
    { label: 'Counter', route: '/counter' },
    { label: 'Structural Directives', route: '/structural-directives' },
    { label: 'Attribute Directives', route: '/attribute-directives' },
    { label: 'Data Binding', route: '/data-binding' },
    { label: 'Service', route: '/service' },
    { label: 'Pipes', route: '/pipes' }
  ];
}
