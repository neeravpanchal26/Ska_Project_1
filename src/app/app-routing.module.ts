import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Global imports
import {ElasticSearchService} from './GlobalServices/elastic-search.service';

// Components imports
import {DefaultComponent} from './Components/default/default.component';
import {PersonAddComponent} from './Components/person-add/person-add.component';

// Routing Array
const routes: Routes = [
  {path: '', component: DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ElasticSearchService],
  entryComponents:[PersonAddComponent]
})
export class AppRoutingModule {
}

export const routingComponents = [
  DefaultComponent
];
