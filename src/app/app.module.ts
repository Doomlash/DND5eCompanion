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
import { RollModalComponent } from "./shared/components/roll-modal/roll-modal.component";
import { StatBlockComponent } from './shared/components/stat-block/stat-block.component';

@NgModule({
    declarations: [
        AppComponent,
        SpellbookPageComponent,
        GlossaryPageComponent,
        CharacterPageComponent,
        InventoryPageComponent,
        DiceRollerPageComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        RollModalComponent,
        StatBlockComponent
    ]
})
export class AppModule { }
