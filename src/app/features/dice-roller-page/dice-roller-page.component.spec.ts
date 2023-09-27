import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerPageComponent } from './dice-roller-page.component';

describe('DiceRollerPageComponent', () => {
  let component: DiceRollerPageComponent;
  let fixture: ComponentFixture<DiceRollerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiceRollerPageComponent]
    });
    fixture = TestBed.createComponent(DiceRollerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
