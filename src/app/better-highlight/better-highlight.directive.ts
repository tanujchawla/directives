import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('defColor') defaultColor: string   = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') bgColor: string;
  
  constructor(private element : ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    this.bgColor = this.defaultColor;
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'aqua');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'aqua');
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.bgColor = this.defaultColor;
  }
}
