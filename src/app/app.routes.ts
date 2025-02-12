import { Routes } from '@angular/router';
import { CrudLocalStorageComponent } from './pages/crud-local-storage/crud-local-storage.component';
import { CrudLocalStorageSignalComponent } from './pages/crud-local-storage-signal/crud-local-storage-signal.component';


export const routes: Routes = [
  {
    path:"local-template",
    component:CrudLocalStorageComponent
  },
  {
   path:"local-template-signal",
   component:CrudLocalStorageSignalComponent
  }
];
