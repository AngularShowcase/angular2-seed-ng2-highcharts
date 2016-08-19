import { Routes } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { ChartsRoutes } from './+charts/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...ChartsRoutes
];
