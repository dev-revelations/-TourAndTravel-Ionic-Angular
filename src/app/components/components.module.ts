import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const exports = [
  HeaderComponent
];

@NgModule({
  declarations: exports,
  imports: [
    CommonModule
  ],
  exports
})
export class ComponentsModule { }
