import { Pipe, PipeTransform } from '@angular/core';
import { repeat } from 'rxjs';

@Pipe({
  name: 'contra'
})
export class ContraPipe implements PipeTransform {

  transform(value:string, mostrar: boolean = false): string{
    return (mostrar) ? '*'.repeat(value.length) : value; 
  }

}
