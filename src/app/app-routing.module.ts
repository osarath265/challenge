import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowToComponent } from './how-to/how-to.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [{
  path:'' , redirectTo:'home' ,pathMatch: 'full'
},{
  path: 'home' ,component:LandingPageComponent
},
  {
  path: 'howto' , component:HowToComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
