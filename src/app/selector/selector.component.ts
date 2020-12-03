import { Component } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-selector',
  templateUrl:'./selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {

  constructor(private dataService: DataService) { }
  dataservice = this.dataService;

  go(number: number) {
    this.dataservice.chandeMonth(number)
  }
}
