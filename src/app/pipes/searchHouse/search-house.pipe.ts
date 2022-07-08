import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HousesComponent } from 'src/app/components/houses/houses.component';
import { HouseRestService } from 'src/app/services/houseRest/house-rest.service';

@Pipe({
  name: 'searchHouse'
})
export class SearchHousePipe implements PipeTransform
{

  constructor
  (
    public houseComponent: HousesComponent,
    public houseRest : HouseRestService,
  )
  { }

  transform(houses:any, search:any)
  {
    for(let casa of houses)
    {
      if(search !== casa.name)
      {
        this.houseComponent.changeMap(7)
      }
      if(search == casa.name)
      {
          var index = houses.indexOf(casa)
      }continue
    }
      this.houseComponent.changeMap(index);
    if(search == undefined)
    {
      return houses;
    }
    else
    {
      return houses.filter((house:any) => 
      {
        return house.name.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
