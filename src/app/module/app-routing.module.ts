import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { ResultComponent } from "../result/result.component";
import { SettingComponent } from "../setting/setting.component";
import { NotFoundComponent } from "../not-found/not-found.component";

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'result', component: ResultComponent },
  { path: 'setting', component: SettingComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
