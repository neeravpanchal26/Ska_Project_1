import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components imports
import {DefaultComponent} from './Components/default/default.component';

// Routing Array
const routes: Routes = [
  {path: '', component: DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  DefaultComponent
];
