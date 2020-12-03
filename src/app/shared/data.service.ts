import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'

})
export class DataService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())

  chandeMonth(namber: number){
    const value = this.date.value.add(namber, 'month')
     this.date.next(value)
  }

}
