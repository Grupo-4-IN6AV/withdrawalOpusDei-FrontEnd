import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HousesComponent } from 'src/app/components/houses/houses.component';
import { HouseRestService } from 'src/app/services/houseRest/house-rest.service';

@Pipe({
  name: 'searchHouse'
})
export class SearchHousePipe implements PipeTransform
{

  housesPipe:any;

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
        let params = {name:search}
        this.houseRest.getHousesPipe(params).subscribe({
          next: (res: any) =>{
            this.housesPipe = res.casas
            if(this.housesPipe.length === 0)
            {
              this.houseComponent.sinResultados = true
              this.houseComponent.centroamerica = false
            }
            else if(this.housesPipe.length !== 0)
            {
              this.houseComponent.sinResultados = false
            }
          },
          error: (err) => console.log(err)
        })
        return house.name.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
