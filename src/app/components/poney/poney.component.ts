import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';

@Component({
  selector: 'amb-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PoneyComponent implements OnInit {
  @Input() poney: Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()
  myId: any;

  constructor() { }

  ngOnInit() {
    this.run()
  }


  run() {
    this.myId = setInterval(()=>{
      this.poney.distance += (Math.floor(Math.random()*10) + 1);
      if(this.poney.distance >= 90) {
        this.poney.distance = 90
        this.win.emit(this.poney)
        this.stopRuning()
      }

    },1000)
  }

  stopRuning() {
    clearInterval(this.myId)
  }

}
