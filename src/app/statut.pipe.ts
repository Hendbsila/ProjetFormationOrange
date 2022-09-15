import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statut'
})
export class StatutPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value==false)return "Session ouverte"; else return "Session fermée";
  }

}
