import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>Yay I have a dashboard!</p> `,
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {}
