import { Route } from '@angular/router';
import { GameComponent } from './game.component';

export const GAME_ROUTE: Route = {
  path: '',
  component: GameComponent,
  data: {
    pageTitle: 'Welcome to Game component!',
  },
};
