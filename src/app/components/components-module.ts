import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing-module';
import { ParentComponent } from './parent-component/parent-component';
import { ChildComponent } from './child-component/child-component';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    MatCard,
    MatLabel,
    MatFormField,
    MatCard,
    MatCardContent,
    MatDivider,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatFormField,
    MatInputModule,
    MatButtonModule
  ]
})
export class ComponentsModule { }
