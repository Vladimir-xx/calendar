import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponentsComponent} from '../modal-components/modal-components.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}


  open() {
    const modalRef = this.modalService.open(ModalComponentsComponent);
    modalRef.componentInstance.name = 'Vladimir';
    modalRef.componentInstance.velcome = 'hi';
  }

}
