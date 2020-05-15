import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showhide'
})
export class ShowhidePipe implements PipeTransform {

  transform(value: string, show:boolean=true): any {
    return (show)? '*'.repeat( value.length): value;
  }

}
