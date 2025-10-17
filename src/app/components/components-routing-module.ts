import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child-component/child-component';
import { ParentComponent } from './parent-component/parent-component';

const routes: Routes = [
  {path: "parent", component: ParentComponent},
    {path: "child", component:ChildComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
