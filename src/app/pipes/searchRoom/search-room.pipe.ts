import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRoom'
})
export class SearchRoomPipe implements PipeTransform {

  transform(rooms:any, search:any){
    if(search == undefined){
      return rooms;
    }else{
      return rooms.filter( (room:any) => {
        return room.name.toLowerCase().includes(search.toLowerCase());
      })
    }
  }
}
