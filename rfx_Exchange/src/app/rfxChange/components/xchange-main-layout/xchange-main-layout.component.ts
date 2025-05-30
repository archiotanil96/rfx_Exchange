import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xchange-main-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './xchange-main-layout.component.html',
  styleUrls: ['./xchange-main-layout.component.css']
})
export class XchangeMainLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('typingContainer', { static: false, read: ElementRef }) typingContainer!: ElementRef<HTMLElement>;

  menuOpen = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.playSlideOneMessages();
  }

  async playSlideOneMessages() {
    if (!this.typingContainer) return;

    // Slide 1 messages
    const slide1bubbles = Array.from(document.querySelectorAll('#slide1-content .message')) as HTMLElement[];
    for (let bubble of slide1bubbles) {
      this.renderer.setStyle(bubble, 'opacity', '1');
      this.renderer.setStyle(bubble, 'transform', 'translateX(0)');
      bubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
      await this.wait(1500);
    }

    // Show slide 2
    const slide2Radio = document.getElementById('slide2') as HTMLInputElement;
    if (slide2Radio) {
      slide2Radio.checked = true;
      await this.wait(500);
      await this.playSlideTwoMessages();
    }

    // Show slide 3
    const slide3Radio = document.getElementById('slide3') as HTMLInputElement;
    if (slide3Radio) {
      slide3Radio.checked = true;
      await this.wait(500);
      await this.playSlideThreeMessages();
    }

    const slide4Radio = document.getElementById('slide4') as HTMLInputElement;
if (slide4Radio) {
  slide4Radio.checked = true;
  await this.wait(500);
  await this.playSlideFourMessages();
}
  }

  async playSlideTwoMessages() {
    const bubbles = Array.from(document.querySelectorAll('#slide2-content .message')) as HTMLElement[];
    for (let bubble of bubbles) {
      this.renderer.setStyle(bubble, 'opacity', '1');
      this.renderer.setStyle(bubble, 'transform', 'translateX(0)');
      bubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
      await this.wait(1500);
    }
  }

  async playSlideThreeMessages() {
    const bubbles = Array.from(document.querySelectorAll('#slide3-content .message')) as HTMLElement[];
    for (let bubble of bubbles) {
      this.renderer.setStyle(bubble, 'opacity', '1');
      this.renderer.setStyle(bubble, 'transform', 'translateX(0)');
      bubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
      await this.wait(1500);
    }
  }

  async playSlideFourMessages() {
  const bubbles = Array.from(document.querySelectorAll('#slide4-content .message')) as HTMLElement[];
  for (let bubble of bubbles) {
    this.renderer.setStyle(bubble, 'opacity', '1');
    this.renderer.setStyle(bubble, 'transform', 'translateX(0)');
    bubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
    await this.wait(1500);
  }
}


  wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onCardClick(perk: string): void {
    alert(`You clicked on: ${perk}`);
  }

  handleClick(): void {
    alert('You clicked the Yes, Please! button.');
  }
}
