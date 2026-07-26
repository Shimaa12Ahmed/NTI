import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { SmartProducts } from './features/smart-products/smart-products';
import { Nav } from './features/nav/nav';
import { Footer } from './features/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav,Home,SmartProducts,Footer,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('product-app');
}
