import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBorderBottomStyle]'
})
export class BorderBottomDirective {
  @Input('appBorderBottomStyle') damage: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.damage > 50 ? this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '2.5px solid #F85959')
      : this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '1px solid #009688');

  }
}

