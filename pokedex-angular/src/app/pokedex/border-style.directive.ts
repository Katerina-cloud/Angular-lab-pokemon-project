import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderBoldDirective {
  @Input('appBorderStyle') damage: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.damage > 50 ? this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2.5px solid #F85959')
      : this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid #009688');

  }
}

