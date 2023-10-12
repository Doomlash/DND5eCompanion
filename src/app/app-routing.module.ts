import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './features/character-page/character-page.component';
import { CoverPageComponent } from './features/cover-page/cover-page.component';
import { DiceRollerPageComponent } from './features/dice-roller-page/dice-roller-page.component';
import { GlossaryPageComponent } from './features/glossary-page/glossary-page.component';
import { InventoryPageComponent } from './features/inventory-page/inventory-page.component';
import { SpellbookPageComponent } from './features/spellbook-page/spellbook-page.component';

const routes: Routes = [
  { path: 'cover', component: CoverPageComponent },
  { path: 'character', component: CharacterPageComponent },
  { path: 'spellbook', component: SpellbookPageComponent },
  { path: 'dice-roller', component: DiceRollerPageComponent },
  { path: 'inventory', component: InventoryPageComponent },
  { path: 'glossary', component: GlossaryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
