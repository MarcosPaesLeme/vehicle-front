import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: "app-create-modal",
  templateUrl: "./create-modal.component.html",
  styleUrls: ["./create-modal.component.scss"]
})
export class CreateModalComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateModalComponent>,
    private vehicleService : VehicleService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  form: FormGroup;

  ngOnInit() {
    this.formInit();
    if (this.data) {
      console.log(this.data);
      this.fillForm();
    }
  }

  formInit() {
    this.form = this.formBuilder.group({
      _id: ["", Validators.nullValidator],
      vehicle: ["", Validators.required],
      brand: ["", Validators.required],
      year: ["", Validators.required],
      description: ["", Validators.nullValidator]
    });
  }

  fillForm() {
    this.form.patchValue({
      _id: this.data && this.data.vehicle ? this.data._id : null,
      vehicle: this.data && this.data.vehicle ? this.data.vehicle : null,
      brand: this.data && this.data.brand ? this.data.brand : null,
      year: this.data && this.data.year ? this.data.year : null,
      description:
        this.data && this.data.description ? this.data.description : null
    });
  }

  showInvalidFeedback(fieldPath: string) {
    const control = this.form.get(fieldPath);
    return !control.valid && control.touched;
  }

  save() {
    if (this.data) {
      this.vehicleService.putVehicle(this.data._id, this.form.value).subscribe(
        res => this.dialogRef.close(this.form.value),
        err => console.log(err)
      )
    } else {
      this.vehicleService.postVehicle(this.form.value).subscribe(
        res => this.dialogRef.close(this.form.value),
        err => console.log(err)
      )
    }
  }

  close() {
    this.dialogRef.close();
  }
}
