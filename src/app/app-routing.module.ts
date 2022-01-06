import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./modules/core/shared/layout/layout.component";

const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path:'home',loadChildren: ()=> import('./modules/home/home.module').then(module => module.HomeModule).catch(error => console.log(error))},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
