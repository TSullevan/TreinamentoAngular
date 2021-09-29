import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { MasterPageComponent } from './shared/pages/master-page/master-page.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const desktopRoutes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'contato',
        component: ContactPageComponent
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
  imports: [RouterModule.forRoot([...desktopRoutes, ...defaultRoutes],
    {
      scrollPositionRestoration: 'disabled',
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    router.resetConfig([...desktopRoutes, ...defaultRoutes]);
  }
}
