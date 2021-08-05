import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ComponentsModule } from '../components/components.module';

const exports = [
  HomeSectionComponent
];

@NgModule({
  declarations: exports,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports
})
export class SectionsModule { }
