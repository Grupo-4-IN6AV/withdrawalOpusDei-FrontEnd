import { Component, OnInit } from '@angular/core';
import { HouseRestService } from 'src/app/services/houseRest/house-rest.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses: any;

  constructor(
    public houseRest: HouseRestService,
  ) { }

  ngOnInit(): void {
    this.getHouses()
  }

  getHouses(){
    this.houseRest.getHouses().subscribe({
      next: (res: any) =>{
        this.houses = res.casas
      },
      error: (err) => console.log(err)
    })
  }

}
