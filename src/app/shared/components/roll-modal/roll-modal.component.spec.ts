import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollModalComponent } from './roll-modal.component';

describe('RollModalComponent', () => {
  let component: RollModalComponent;
  let fixture: ComponentFixture<RollModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RollModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
