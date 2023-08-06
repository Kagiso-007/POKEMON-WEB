import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    exports: [
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatChipsModule
    ]
})
export class MaterialModule {}
