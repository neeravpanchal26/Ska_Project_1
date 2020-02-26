import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Material imports
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule
  ]
})
export class MaterialModuleModule {
}
