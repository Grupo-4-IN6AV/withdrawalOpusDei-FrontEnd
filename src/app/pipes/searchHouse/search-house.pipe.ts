import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHouse'
})
export class SearchHousePipe implements PipeTransform {

  transform(houses:any, search:any){
    if(search == undefined){
      return houses;
    }else{
      return houses.filter( (house:any) => {
        return house.name.toLowerCase().includes(search.toLowerCase());
      })
    }
  }

}
