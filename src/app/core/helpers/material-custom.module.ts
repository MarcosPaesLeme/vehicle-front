import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatToolbarModule,
        MatSnackBarModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatToolbarModule,
        MatSnackBarModule
    ]
})
export class MaterialCustomModule { }
