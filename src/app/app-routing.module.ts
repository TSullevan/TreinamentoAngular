import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthPageComponent } from './auth/pages/auth-page/auth-page.component';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { EmployeeGuard } from './shared/guards/employee.guard';
import { JanitorGuard } from './shared/guards/janitor.guard';
import { ManagerGuard } from './shared/guards/manager.guard';
import { MasterPageComponent } from './shared/pages/master-page/master-page.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { StoragePageComponent } from './storage/pages/storage-page/storage-page.component';

const desktopRoutes: Routes = [
  {
    path: 'login',
    component: AuthPageComponent
  },
  {
    path: '',
    component: MasterPageComponent,
    // canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomePageComponent,
        canActivate: [EmployeeGuard]
      },
      {
        path: 'contato',
        component: ContactPageComponent,
        canActivate: [ManagerGuard]
      },
      {
        path: 'deposito',
        component: StoragePageComponent,
        canActivate: [JanitorGuard]
      }
    ]
  },
];

const defaultRoutes: Routes = [
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot([...desktopRoutes, ...defaultRoutes])],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    router.resetConfig([...desktopRoutes, ...defaultRoutes]);
  }
}
