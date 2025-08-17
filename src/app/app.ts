import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [Header, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('webSite-KBW-Engenharia');
}
