import { Component, ViewEncapsulation } from "@angular/core";
import { Race } from "src/app/interfaces/race";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = "formation";

  races: Race[];

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.races.subscribe({
      next: races => {
        this.races = races;
      },
      complete: () => {
        console.log("yes end");
      }
    });
  }
}
