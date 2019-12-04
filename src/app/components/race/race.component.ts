import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  Input
} from "@angular/core";
import { PoneyComponent } from "../poney/poney.component";
import { Poney } from "src/app/interfaces/poney";
import { Race } from "src/app/interfaces/race";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-race",
  templateUrl: "./race.component.html",
  styleUrls: ["./race.component.scss"]
})
export class RaceComponent implements OnInit {
  ponies$: Observable<Poney[]>;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ponies$ = this.dataService.ponies;
    this.route.paramMap.subscribe(params => {});
  }

  @ViewChildren("poneyComponents") poneyComponents: QueryList<PoneyComponent>;
  @Input() race: Race;

  handleWin(poney: Poney): void {
    console.log("WINNER: ", poney.name);

    this.poneyComponents.forEach(PoneyComponent => {
      console.log("PoneyComponent==> ", PoneyComponent);
      PoneyComponent.stopRuning();
    });
  }
}
