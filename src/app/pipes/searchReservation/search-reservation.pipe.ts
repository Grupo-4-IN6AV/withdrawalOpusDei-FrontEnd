import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservation'
})
export class SearchReservationPipe implements PipeTransform {

  transform(reservations:any, search:any){
    if(search == undefined){
      return reservations;
    }else{
      return reservations.filter( (reservation:any) => {
        return reservation.name.toLowerCase().includes(search.toLowerCase());
      })
    }
  }
}
