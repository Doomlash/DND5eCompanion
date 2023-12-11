import { Component } from '@angular/core';
import { CONSTANTS } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss', './../../app.component.scss']
})
export class CharacterPageComponent {
  constants: any = CONSTANTS;
  values = {
    str:20,
    dex:17,
    con:14,
    int:11,
    wis:9,
    cha:7
  }
  constructor() { }

}
