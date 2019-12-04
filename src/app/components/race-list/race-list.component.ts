import { Race } from "src/app/interfaces/race";
import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
@Component({
  selector: "app-race-list",
  templateUrl: "./race-list.component.html",
  styleUrls: ["./race-list.component.scss"]
})
export class RaceListComponent implements OnInit {
  races$: Observable<Race[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.races$ = this.dataService.races;
  }
}
