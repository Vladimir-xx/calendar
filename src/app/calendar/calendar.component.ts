import { Component, OnInit } from '@angular/core';
import *as moment from 'moment';
import {DataService} from '../shared/data.service';
interface Week {
  days: Day[]
}
interface Day {
  value:moment.Moment
  active: boolean
  disabled:boolean
  selected:boolean
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

   calendar: Week[]

  constructor( private dateservice: DataService) { }

  ngOnInit(): void {
     this.dateservice.date.subscribe(this.generate.bind(this))
  }
  generate(now: moment.Moment){
     const startDay = now.clone().startOf('month').startOf('week')
     const endDay = now.clone().endOf('month').endOf('week')
     const date = startDay.clone().subtract(1,'day')
     const calendar = []
    while (date.isBefore(endDay, 'day')){
       calendar.push({
         days: Array(7)
           .fill(0)
           .map( () => {
           const value = date.add(1,'day').clone()
           const active = moment().isSame(value,'date')
           const disabled = !now.isSame(value,'month')
           const selected = now.isSame(value, 'date')

           return{
             value, active, disabled, selected
           }

         })
       })

    }
    console.log(calendar)
   this.calendar = calendar
  }


  select(day: moment.Moment) {
    this.dateservice.chahgeDate(day)
  }
}
