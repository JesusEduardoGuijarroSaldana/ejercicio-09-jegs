import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ejercicio 09 - Interpolación';
  name = 'Jóse Antonio Vargas López';
  age = 24;
  semester = 'Quinto semestre';
  grades = [8, 7, 10, 10, 8, 9, 8, 6];
  mean = this.calculateMean();
  status = this.approved();
  calculateMean() {
    let sum = 0;
    const length = this.grades.length;
    for (let i = 0; i < length; i++) sum += this.grades[i];
    return sum / length;
  }

  approved() {
    if (this.calculateMean() >= 6) return 'Aprobado';
    else return 'No aprobado';
  }
}
