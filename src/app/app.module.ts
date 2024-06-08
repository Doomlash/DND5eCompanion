import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellbookPageComponent } from './features/spellbook-page/spellbook-page.component';
import { GlossaryPageComponent } from './features/glossary-page/glossary-page.component';
import { CharacterPageComponent } from './features/character-page/character-page.component';
import { InventoryPageComponent } from './features/inventory-page/inventory-page.component';
import { DiceRollerPageComponent } from './features/dice-roller-page/dice-roller-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SpellbookPageComponent,
    GlossaryPageComponent,
    CharacterPageComponent,
    InventoryPageComponent,
    DiceRollerPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
