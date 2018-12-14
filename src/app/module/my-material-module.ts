import { NgModule } from '@angular/core';
import { MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
  MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, MatPaginatorModule, 
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, MatPaginatorModule, 
  ],
  exports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, MatPaginatorModule, 
  ]
})
export class MyMaterialModule { }