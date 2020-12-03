import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-components',
  templateUrl: './modal-components.component.html',
  styleUrls: ['./modal-components.component.css']
})
export class ModalComponentsComponent implements OnInit {
  @Input() name;
  @Input() velcome;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
