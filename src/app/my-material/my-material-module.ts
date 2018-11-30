import { NgModule } from '@angular/core';
import { MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
  MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, 
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, 
  ],
  exports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, 
  ]
})
export class MyMaterialModule { }