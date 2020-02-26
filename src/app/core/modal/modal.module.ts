import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from '../helpers/material-custom.module';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const modals = [
  EditModalComponent,
  CreateModalComponent
];

@NgModule({
  declarations: [
    modals
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    modals
  ]
})
export class ModalModule { }
