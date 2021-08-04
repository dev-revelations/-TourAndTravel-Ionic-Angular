import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';

const exports = [
  HeaderComponent,
  LogoComponent,
  NavbarComponent,
  LoginFormComponent
];

@NgModule({
  declarations: exports,
  imports: [
    CommonModule
  ],
  exports
})
export class ComponentsModule { }
