import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  form: FormGroup

  constructor(private breakpointObserver: BreakpointObserver, private fb: FormBuilder) {
    
    this.form = fb.group({
      'FirstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'Phone': [null, Validators.compose( [Validators.required])],
      'Email': [null, Validators.compose([Validators.required, Validators.email])],
    }); 
  }
  title = 'app';
}
