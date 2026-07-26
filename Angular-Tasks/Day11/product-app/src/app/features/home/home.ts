import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
imageUrl = 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png';
  isDisabled = true;
   toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }

}
