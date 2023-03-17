import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AllComponent} from "./dynamic/navbar/all/all.component";
import {ActiveComponent} from "./dynamic/navbar/active/active.component";
import {CompletedComponent} from "./dynamic/navbar/completed/completed.component";

const routes: Routes = [
  {path: 'activePage', component: ActiveComponent},
  {path: 'completedPage', component: CompletedComponent},
  {path: '', component: AllComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
