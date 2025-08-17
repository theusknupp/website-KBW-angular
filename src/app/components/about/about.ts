import { Component, ElementRef, ViewChild } from '@angular/core';
import { observeElement } from '../../utils/intersection-observer';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  @ViewChild('sobrenosSection', { static: true }) sobrenosSection!: ElementRef;

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      console.log('📌 Iniciando observação após render');
      observeElement(this.sobrenosSection.nativeElement);
    });
}

}
