
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDialogComponent } from './agendaDialogcomponent.component';

describe('MaincomponentComponent', () => {
  let component: AgendaDialogComponent;
  let fixture: ComponentFixture<AgendaDialogComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
