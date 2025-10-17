import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child-component/child-component';
import { ParentComponent } from './components/parent-component/parent-component';

const routes: Routes = [
  {path: "", component: ParentComponent},
  {path: "", component: ChildComponent},
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
