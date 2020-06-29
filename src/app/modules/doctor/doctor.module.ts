import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { AppointmentComponent } from './appointment/appointment.component';



@NgModule({
  declarations: [DoctorComponent, NewComponent, EditComponent, DeleteComponent, DetailsComponent, ListComponent, AppointmentComponent],
  imports: [
    CommonModule
  ]
})
export class DoctorModule { }
