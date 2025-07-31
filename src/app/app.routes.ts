import { Routes } from '@angular/router';
import { ProfileDetail } from './profiles/profile-detail/profile-detail';

export const routes: Routes = [
  { path: '', component: ProfileDetail },
  { path: '**', redirectTo: '' }
];
