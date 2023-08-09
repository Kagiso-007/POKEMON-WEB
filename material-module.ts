import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    exports: [
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ]
})
export class MaterialModule {}
