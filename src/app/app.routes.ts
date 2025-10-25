import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { StructuralDirectivesComponent } from './pages/structural-directives/structural-directives.component';
import { AttributeDirectivesPageComponent } from './pages/attribute-directives-page/attribute-directives-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { PipesPagesComponent } from './pages/pipes-page/pipes-page.component';

export const routes: Routes = [

{ 
  path: 'home', component: HomePageComponent
},
{ 
  path: 'counter', component: CounterPageComponent 
},
{ 
  path: 'structural-directives', component: StructuralDirectivesComponent 
},
{
  path: 'attribute-directives', component: AttributeDirectivesPageComponent
},
{
  path: 'data-binding', component: DataBindingPageComponent
},
{
  path: 'service', component: ServicePageComponent
},
{
  path: 'pipes', component: PipesPagesComponent
},
{
  path: '**', redirectTo: 'home', pathMatch: 'full'
}
];
