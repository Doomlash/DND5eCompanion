import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPageComponent } from './inventory-page.component';

describe('InventoryPageComponent', () => {
  let component: InventoryPageComponent;
  let fixture: ComponentFixture<InventoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryPageComponent]
    });
    fixture = TestBed.createComponent(InventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
