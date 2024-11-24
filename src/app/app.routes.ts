import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for the main page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled', // Enables fragment-based navigation
      scrollPositionRestoration: 'enabled', // Restores scroll position on navigation
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
