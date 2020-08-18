import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule }from '@angular/material/form-field';
import { MatInputModule }from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule  } from '@angular/material/paginator'
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule} from'@angular/material/core'
import { MatDialogModule} from '@angular/material/dialog'
import { MatSortModule } from '@angular/material/sort'
import {MatRadioModule} from '@angular/material/radio';
import { MatGridListModule} from '@angular/material/grid-list'
//import {MatAutocompleteModule,MAT_AUTOCOMPLETE_SCROLL_STRATEGY} from '@angular/material/autocomplete';
//import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider'
import {MatChipsModule} from '@angular/material/chips'
@NgModule({
  imports: [ MatGridListModule,MatButtonModule,MatInputModule,MatIconModule,MatTabsModule,
    MatSortModule,MatRadioModule,MatDividerModule,MatDatepickerModule,
   MatFormFieldModule,MatCheckboxModule,MatTableModule,MatPaginatorModule,MatNativeDateModule,MatDialogModule,
    MatCardModule,MatToolbarModule,MatSelectModule,MatSidenavModule,MatListModule,MatChipsModule],
    exports: [MatGridListModule, MatButtonModule,MatInputModule,MatIconModule,MatTabsModule,
      MatSortModule,MatRadioModule,MatDividerModule,MatDatepickerModule,
    MatFormFieldModule,MatCheckboxModule,MatTableModule,MatPaginatorModule,MatNativeDateModule,MatDialogModule,
    MatCardModule,MatToolbarModule,MatSelectModule,MatSidenavModule,MatListModule,MatChipsModule]
})
export class MaterialModule {
}