import { Poney } from "./../interfaces/poney";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "racingPipe"
})
export class RacingPipePipe implements PipeTransform {
  transform(ponies: Poney[], poneyIds: string[]): Poney[] {
    return ponies ? ponies.filter(poney => poneyIds.includes(poney.id)) : [];
  }
}
