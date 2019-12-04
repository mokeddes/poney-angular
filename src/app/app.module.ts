import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PoneyComponent } from "./components/poney/poney.component";
import { BoostDirective } from "./directives/boost.directive";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialComponentsModule } from "./modules/material-components/material-components.module";
import { UnitPipe } from "./pipes/unit.pipe";
import { RaceComponent } from "./components/race/race.component";
import { RacingPipePipe } from "./pipes/racing-pipe.pipe";
import { RaceListComponent } from "./components/race-list/race-list.component";
import { RaceCreateComponent } from "./components/race-create/race-create.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    BoostDirective,
    UnitPipe,
    RaceComponent,
    RacingPipePipe,
    RaceListComponent,
    RaceCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
