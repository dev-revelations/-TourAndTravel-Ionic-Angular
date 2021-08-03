import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

const exports = [
  HeaderComponent,
  LogoComponent
];

@NgModule({
  declarations: exports,
  imports: [
    CommonModule
  ],
  exports
})
export class ComponentsModule { }
