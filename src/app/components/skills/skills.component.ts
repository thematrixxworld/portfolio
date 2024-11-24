import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  skills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'Kotlin', icon: 'devicon-kotlin-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      ],
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
        { name: 'ReactJS', icon: 'devicon-react-original colored' },
        { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'SQLite', icon: 'devicon-sqlite-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Firebase', icon: 'devicon-firebase-plain colored' },

      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Android', icon: 'devicon-android-plain colored' },
        { name: 'Visual Studio Code', icon: 'devicon-vscode-plain colored' },
        { name: 'Visual Studio', icon: 'devicon-visualstudio-plain colored' },
        { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
      ],
    },
  ];

  currentIndex = 0;
  sliderInterval: any;

  ngAfterViewInit(): void {
    this.createSkillsChart();
  }

  ngOnInit(): void {
    // Logic to handle active card changes
    this.sliderInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.skills.length; // Loop through cards
      this.goToSlide(this.currentIndex);
    }, 20000); // Change card every 20 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderInterval);
  }

  createSkillsChart(): void {
    new Chart('skillsChart', {
      type: 'doughnut',
      data: {
        labels: ['JavaScript', 'TypeScript', 'Angular', 'AWS', 'GCP', 'Git'],
        datasets: [
          {
            label: 'Proficiency',
            data: [90, 85, 80, 75, 70, 85],
            backgroundColor: [
              '#0078d4',
              '#00a6fb',
              '#9c27b0',
              '#43a047',
              '#ff9800',
              '#f44336',
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              boxWidth: 15,
              padding: 20,
              color: '#FFFFFF',
            },
          },
          title: {
            display: false,  // Disable the default title
          },
          // Custom Plugin to draw the bottom heading
          tooltip: {
            enabled: true,  // Disable default tooltip to avoid overlap with custom text
          }
        },
        layout: {
          padding: {
            left: 60,
          },
        },
      },
      plugins: [
        {
          id: 'bottom-heading',  // Custom plugin ID
          afterDraw: (chart) => {
            const ctx = chart.ctx;
            const width = chart.width;
            const height = chart.height;
            const fontSize = 11;
            const text = 'Skill Proficiency Breakdown';  // Your custom heading text here
  
            // Set text properties
            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = '#FFFFFF';  // Set text color
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
  
            // Draw the text at the bottom of the chart
            const x = width / 2;
            const y = height - 35;  // 20px from the bottom edge
            ctx.fillText(text, x, y);
          },
        },
      ],
    });
  }
  


  goToSlide(index: number): void {
    this.currentIndex = index;
    const slider = document.querySelector('.skills-slider') as HTMLElement;
    const cardWidth = document.querySelector('.skill-card')?.clientWidth || 0;
    const offset = -this.currentIndex * cardWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }


}
