import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class SharedModule { }
