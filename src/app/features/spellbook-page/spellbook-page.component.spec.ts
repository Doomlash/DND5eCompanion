import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellbookPageComponent } from './spellbook-page.component';

describe('SpellbookPageComponent', () => {
  let component: SpellbookPageComponent;
  let fixture: ComponentFixture<SpellbookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpellbookPageComponent]
    });
    fixture = TestBed.createComponent(SpellbookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
