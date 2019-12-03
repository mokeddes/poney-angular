import { Component, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { Poney } from './interfaces/poney';
import { PoneyComponent } from './components/poney/poney.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'formation';

  @ViewChildren('poneyComponents') poneyComponents: QueryList<PoneyComponent>

  /*
  ngAfterViewInit(){
    console.log(this.title)
  }*/

  ponies: Poney [] = [{
    "id": "0",
    "name": "namePoney anis ",
    "img": "http://ponyracer.ninja-squad.com/assets/images/pony-green-rainbow.gif",
    "distance": 0
  }, {
    "id": "1",
    "name": "namePoney sylvain ",
    "img": "http://ponyracer.ninja-squad.com/assets/images/pony-yellow-rainbow.gif",
    "distance": 0
  }, {
    "id": "2",
    "name": "namePoney romain ",
    "img": "http://ponyracer.ninja-squad.com/assets/images/pony-blue-rainbow.gif",
    "distance": 0
  }]

  handleWin(poney: Poney): void{
    console.log('WINNER: ', poney.name)
    console.log('this.poneyComponents --> , this.poneyComponent', this.poneyComponents)
    this.poneyComponents.forEach((PoneyComponent)=>{
      console.log('PoneyComponent==> ', PoneyComponent)
      PoneyComponent.stopRuning()
    })
  }


}
