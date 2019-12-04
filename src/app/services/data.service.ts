import { Race } from "./../interfaces/race";
import { Injectable } from "@angular/core";
import { Poney } from "../interfaces/poney";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  public get ponies(): Observable<Poney[]> {
    return new Observable(observer => {
      setTimeout(() => observer.next(this._ponies), 3000);
    });
  }

  public get races(): Observable<Race[]> {
    return new Observable(observer => {
      observer.next(this._races);
      observer.complete();
    });
  }

  _ponies: Poney[] = [
    {
      id: "0",
      name: "petit vert",
      img:
        "http://ponyracer.ninja-squad.com/assets/images/pony-green-rainbow.gif",
      distance: 0
    },
    {
      id: "1",
      name: "petit jaune",
      img:
        "http://ponyracer.ninja-squad.com/assets/images/pony-yellow-rainbow.gif",
      distance: 0
    },
    {
      id: "2",
      name: "petit blue",
      img:
        "http://ponyracer.ninja-squad.com/assets/images/pony-blue-rainbow.gif",
      distance: 0
    }
  ];

  _races: Race[] = [
    { id: "0", name: "paris", poneyIds: ["0", "1"] },
    { id: "1", name: "nice", poneyIds: ["1", "2"] }
  ];
}
