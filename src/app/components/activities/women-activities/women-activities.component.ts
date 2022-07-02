import { Component, OnInit } from '@angular/core';
import { EventRestService } from 'src/app/services/eventRest/event-rest.service';

@Component({
  selector: 'app-women-activities',
  templateUrl: './women-activities.component.html',
  styleUrls: ['./women-activities.component.css']
})
export class WomenActivitiesComponent implements OnInit {

  events : any;
  startDates: any;
  endDates: any;

  constructor(
    public eventRest : EventRestService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    this.eventRest.getEvents().subscribe({
      next: (res: any) =>{
        this.events = res.events
        var arrayStartDates = [];
        var arrayEndDates = [];

        for(var key=0; key<this.events.length; key++)
        {
            var actualStartDate = this.events[key].startDate;
            var splitActualDate = actualStartDate.split('T');
            arrayStartDates.push(splitActualDate[0]);

            var actualEndDate = this.events[key].endDate;
            var splitActuaEndDate = actualEndDate.split('T');
            arrayEndDates.push(splitActuaEndDate[0]);
        }
        this.startDates = arrayStartDates;
        this.endDates = arrayEndDates;
      },
      error: (err) => console.log(err)
    })
  }

}
