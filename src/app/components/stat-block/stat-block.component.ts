import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.scss']
})
export class StatBlockComponent{

  @Input() public name: string;
  @Input() public value: number;
  @Input() public modifier: number;

  constructor() { }

}
