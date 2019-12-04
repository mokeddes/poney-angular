import { Race } from "src/app/interfaces/race";
import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-race-create",
  templateUrl: "./race-create.component.html",
  styleUrls: ["./race-create.component.scss"]
})
export class RaceCreateComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
