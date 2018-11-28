import { NgModule } from '@angular/core';
import { MatInputModule, MatCheckboxModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [ MatInputModule, MatCheckboxModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule],
  exports: [ MatInputModule, MatCheckboxModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule]
})
export class MyMaterialModule { }