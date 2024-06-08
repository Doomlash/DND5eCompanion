import { Component, TemplateRef, inject } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RollModalComponent } from 'src/app/shared/components/roll-modal/roll-modal.component';

@Component({
  selector: 'app-dice-roller-page',
  templateUrl: './dice-roller-page.component.html',
  styleUrls: ['./dice-roller-page.component.scss', './../../app.component.scss']
})
export class DiceRollerPageComponent {
  private modalService = inject(NgbModal);
	closeResult = '';

	open() {
		this.modalService.open(RollModalComponent)
	}
}
