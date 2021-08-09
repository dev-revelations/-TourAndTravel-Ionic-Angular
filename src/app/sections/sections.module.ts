import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ComponentsModule } from '../components/components.module';
import { BookSectionComponent } from './book-section/book-section.component';
import { PackagesSectionComponent } from './packages-section/packages-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { ReviewSectionComponent } from './review-section/review-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { BrandSectionComponent } from './brand-section/brand-section.component';

const exports = [
  HomeSectionComponent,
  BookSectionComponent,
  PackagesSectionComponent,
  ServicesSectionComponent,
  GallerySectionComponent,
  ReviewSectionComponent,
  ContactSectionComponent,
  BrandSectionComponent,
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
