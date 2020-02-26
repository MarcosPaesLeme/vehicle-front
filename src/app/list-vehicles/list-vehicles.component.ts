import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditModalComponent } from '../core/modal/edit-modal/edit-modal.component';
import { CreateModalComponent } from '../core/modal/create-modal/create-modal.component';
import { VehicleService } from '../core/services/vehicle.service';
import { take } from 'rxjs/operators';
import { Vehicle } from '../core/models/vehicle';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.scss']
})

export class ListVehiclesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['Veiculo', 'Marca', 'Ano', 'Status', 'Ações'];
  dataSource: MatTableDataSource<Vehicle>;

  displaySearchInput: boolean = true;
  
  userLogged;
  constructor(
    public dialog: MatDialog,
    private vehicleService: VehicleService,
    private _snackBar: MatSnackBar,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUser();
    this.loadVehicles();
  }

  getUser() {
    this.userLogged =this.authService.getUser()
  }

  loadVehicles() {
    console.log(this.paginator)

    this.vehicleService.getVehilces().pipe(take(1)).subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res.vehicles);
        // this.dataSource = res.vehicles;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // console.log(this.paginator)
      },
      err => {
        this._snackBar.open('Erro ao carregar os veiculos', 'Parece que sua sessão expirou', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: ['red-snackbar']
        });
      })
  }

  applyFilter(event: Event) {
    // this.displaySearchInput = !this.displaySearchInput;
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    console.log(this.dataSource.filter)
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editModal(vehicle: Vehicle): void {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      height: '450px',
      width: '500px',
      data: vehicle
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadVehicles();
    });
  }

  openCreateVehicleModal(): void {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      height: '450px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadVehicles();
    });
  }

  showInput(): void {
    this.displaySearchInput = !this.displaySearchInput;
  }

  deleteVehicle(vehicle: Vehicle) {
    this.vehicleService.patchStatusVehicle(vehicle._id, vehicle).subscribe(
      res => this.loadVehicles(),
      err => {
        console.log(err);
        this._snackBar.open('Erro ao deleter veiculo', 'Parece que sua sessão expirou', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: ['red-snackbar']
        });
      }
    )
  }

  logOff() {
    this.authService.logOff();
  }

}
