import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentSection: string = 'home';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          this.currentSection = section;
          break;
        }
      }
    }
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }
}