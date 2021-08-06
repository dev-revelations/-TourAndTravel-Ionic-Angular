import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ComponentsModule } from '../components/components.module';
import { BookSectionComponent } from './book-section/book-section.component';
import { PackagesSectionComponent } from './packages-section/packages-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';

const exports = [
  HomeSectionComponent,
  BookSectionComponent,
  PackagesSectionComponent,
  ServicesSectionComponent,
  GallerySectionComponent,
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
