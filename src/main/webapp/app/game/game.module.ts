import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { GAME_ROUTE } from './game.route';
import { GameComponent } from './game.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([GAME_ROUTE])],
  declarations: [GameComponent],
})
export class GameModule {}
