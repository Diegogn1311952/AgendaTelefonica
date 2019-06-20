import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { MatFormFieldModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
const routes: Routes = [
  { path: '', component: MaincomponentComponent , pathMatch: 'full' },
  { path: 'dashboard', component: MaincomponentComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,  
  ]
})
export class AppRoutingModule {}
