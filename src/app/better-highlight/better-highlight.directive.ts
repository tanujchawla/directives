import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';
  
  constructor(private element : ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'aqua');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'aqua');
    this.bgColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.bgColor = 'transparent';
  }

}
