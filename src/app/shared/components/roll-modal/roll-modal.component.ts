import { Component, Input, TemplateRef, inject, input } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiceRollerService } from 'src/app/services/dice-roller/dice-roller.service';

@Component({
  selector: 'app-roll-modal',
  standalone: true,
  imports: [NgbDatepickerModule],
  templateUrl: './roll-modal.component.html',
  styleUrl: './roll-modal.component.scss'
})
export class RollModalComponent {

	modal:any = inject(NgbActiveModal);
  diceRollerService: DiceRollerService = inject(DiceRollerService)

	test(){
		this.modal;
		debugger;
	}
}