import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[powerbar]'
})
export class PowerBarDirective implements AfterViewInit {
  @Input() powerBarColor: string;
  @Input() powerBarWidth: number;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.style.backgroundColor = this.powerBarColor;
    this.el.nativeElement.style.width = `${this.powerBarWidth}%`;
  }
}
