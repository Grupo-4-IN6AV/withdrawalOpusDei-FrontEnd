import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEvent'
})
export class SearchEventPipe implements PipeTransform {

  transform(events:any, search:any){
    if(search == undefined){
      return events;
    }else{
      return events.filter( (event:any) => {
        return event.name.toLowerCase().includes(search.toLowerCase());
      })
    }
  }
}
