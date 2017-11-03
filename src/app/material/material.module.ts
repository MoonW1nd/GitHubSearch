import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatInputModule
  ],
  exports: [
    NoopAnimationsModule,
    MatInputModule
  ],
  declarations: [],
})
export class MaterialModule { }
