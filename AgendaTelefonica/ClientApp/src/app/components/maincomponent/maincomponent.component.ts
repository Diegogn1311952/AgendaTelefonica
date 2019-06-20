import { Component, Inject, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { AgendaDialogComponent } from '../agendaDialog/agendaDialog.component';
import { Agenda } from 'src/app/Models/Agenda';
import { HttpClient } from '@angular/common/http';


export interface DialogData {
  title: string;
  agenda: Agenda;
  type: string;
}

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {
   
  /** Based on the screen size, switch from standard to one column per row */

  agenda: Agenda;

  agendas: Agenda[] = [];

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit(): void {
    this.loadDataTable()
  }

  openDialog(type: string, agenda: Agenda): void {

    var name = type == "Add" ? "Agregar" : "Editar";

    if (name == "Add") {
      this.agenda = null;
    } else {
      this.agenda = agenda;
    }
    const dialogRef = this.dialog.open(AgendaDialogComponent, {
      width: '600px',
      data: { title: name, agenda: this.agenda, type = type }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadDataTable();
    });
  }

  loadDataTable(){
  this.http.get<Agenda[]>(this.baseUrl + 'api/Agenda/GetAll').subscribe(result => {
    this.agendas = result;
  }, error => console.error(error));
  }
}
