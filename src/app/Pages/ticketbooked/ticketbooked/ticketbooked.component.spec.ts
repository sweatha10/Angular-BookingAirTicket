import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbookedComponent } from './ticketbooked.component';

describe('TicketbookedComponent', () => {
  let component: TicketbookedComponent;
  let fixture: ComponentFixture<TicketbookedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketbookedComponent]
    });
    fixture = TestBed.createComponent(TicketbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
