import { Routes } from '@angular/router';

import { Home } from './features/home/home/home';
import { Capsules } from './features/capsules/capsules/capsules';
import { Insights } from './features/insights/insights/insights';
import { Chat } from './features/chat/chat/chat';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'capsules', component: Capsules },
  { path: 'insights', component: Insights },
  { path: 'chat', component: Chat },
  { path: '**', redirectTo: '' }
];