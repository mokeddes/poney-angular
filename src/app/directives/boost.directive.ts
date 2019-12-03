import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Poney } from '../interfaces/poney';

@Directive({
  selector: '[ambBoost]'
})
export class BoostDirective {

  @Input() color:string;
  @Input() isColor: boolean = false
  @Input() poney: Poney


  constructor(private element: ElementRef) {}

  ngOnInit(){
    if (this.isColor){
      this.element.nativeElement.style.backgroundColor = this.color
    }
  }

  @HostListener('dblclick')
  boost(){
    this.poney.distance += 10;
  }

}
