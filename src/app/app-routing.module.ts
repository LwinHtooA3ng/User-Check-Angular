import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';


const routes: Routes = [
  { path:"", redirectTo: 'users', pathMatch: 'full' },
  { path:"users", component: TutorialsListComponent },
  { path:"users/:id", component: TutorialDetailsComponent },
  { path:"add", component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
