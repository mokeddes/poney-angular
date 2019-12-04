import { RaceCreateComponent } from "./components/race-create/race-create.component";
import { Routes } from "@angular/router";
import { RaceListComponent } from "./components/race-list/race-list.component";
import { RaceComponent } from "./components/race/race.component";

export const ROUTES: Routes = [
  { path: "race-list", component: RaceListComponent },
  { path: "race-create", component: RaceCreateComponent },
  { path: "race/:id", component: RaceComponent },
  { path: "**", redirectTo: "race-list" }
];
