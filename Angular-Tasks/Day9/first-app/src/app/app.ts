import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from '../nav/nav.component';
import{ FooterComponent}from'../footer/footer.component';
import { CardComponent } from '../home/home.component';
import { LoadComponent} from './load/load';
import { AboutComponent } from './about/about';
import { ContactUsComponent } from './contact-us/contact-us';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CardComponent,NavComponent,FooterComponent,LoadComponent,AboutComponent,ContactUsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-app');
}
