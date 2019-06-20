import { Component, Inject, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../maincomponent/maincomponent.component';

@Component({
  selector: 'app-agendaDialog',
  templateUrl: './agendaDialog.component.html',
  styleUrls: ['./agendaDialog.component.css']
})
export class AgendaDialogComponent implements OnInit {

  private form: FormGroup;
  title: string = "";
  constructor(private breakpointObserver: BreakpointObserver, public dialogRef: MatDialogRef<AgendaDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder)
  {
    this.generateForm();
  }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    var isNew = this.data.type == "Add" ? true : false;


    this.form = this.fb.group({
      'FirstName': [isNew ? null : this.data.agenda.firstName, Validators.required],
      'LastName': [isNew ? null : this.data.agenda.firstName, Validators.required],
      'Phone': [isNew ? null : this.data.agenda.firstName, Validators.compose([Validators.required)],
      'Email': [isNew ? null : this.data.agenda.firstName, Validators.compose([Validators.required, Validators.email])],
    });

  }
}
