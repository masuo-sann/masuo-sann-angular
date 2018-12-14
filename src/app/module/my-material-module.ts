import { NgModule } from '@angular/core';
import { MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
  MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, 
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, 
  ],
  exports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, 
  ]
})
export class MyMaterialModule { }