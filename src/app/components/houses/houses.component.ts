import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HouseRestService } from 'src/app/services/houseRest/house-rest.service';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses: any;
  searchHouse : any;
  house: any

  centroamerica: boolean = true;
  casa1: boolean = false;
  casa2: boolean = false;
  casa3: boolean = false;
  casa4: boolean = false;
  casa5: boolean = false;
  casa6: boolean = false;
  casa7: boolean = false;
  

  constructor(
    public houseRest: HouseRestService,
  ) { 
   }

  ngOnInit(): void {
    this.getHouses()
  }
  


  changeMap(i: any){
    if(i === 0){
      this.casa1 = true;
      this.casa2 = false;
      this.casa3 = false;
      this.casa4 = false;
      this.casa5 = false;
      this.centroamerica = false;
    } 
    else if(i === 1){
      this.casa1 = false;
      this.casa2 = true;
      this.casa3 = false;
      this.casa4 = false;
      this.casa5 = false;
      this.centroamerica = false;
    }
    else if(i === 2){
      this.casa1 = false;
      this.casa2 = false;
      this.casa3 = true;
      this.casa4 = false;
      this.casa5 = false;
      this.centroamerica = false;
    } 
    else if(i === 3){
      this.casa1 = false;
      this.casa2 = false;
      this.casa3 = false;
      this.casa4 = true;
      this.casa5 = false;
      this.centroamerica = false;
    } 
    else if(i === 4){
      this.casa1 = false;
      this.casa2 = false;
      this.casa3 = false;
      this.casa4 = false;
      this.casa5 = true;
      this.centroamerica = false;
    } 
    else if(i === 5){
      this.casa1 = false;
      this.casa2 = false;
      this.casa3 = false;
      this.casa4 = false;
      this.casa5 = false;
      this.casa6 = true;
      this.casa7 = false;
      this.centroamerica = false;
    } 
    else if(i === 6){
      this.casa1 = false;
      this.casa2 = false;
      this.casa3 = false;
      this.casa4 = false;
      this.casa5 = false;
      this.casa6 = false;
      this.casa7 = true;
      this.centroamerica = false;
    } 
    else{
      this.casa1 = false;
      this.casa2 = false;
      this.casa3 = false;
      this.casa4 = false;
      this.casa5 = false;
      this.centroamerica = true;
    }
  }

  changeCentroamerica(){
    this.centroamerica = true
    this.casa1 = false;
    this.casa2 = false;
    this.casa3 = false;
    this.casa4 = false;
    this.casa5 = false;
  }

  changeHouse1(){
    this.casa1 = true;
    this.casa2 = false;
    this.casa3 = false;
  }

  changeHouse2(){
    console.log('Cambie de casa')
    this.casa1 = false;
    this.casa2 = true;
    this.casa3 = false;
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
