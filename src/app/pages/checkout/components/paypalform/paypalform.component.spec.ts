import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalformComponent } from './paypalform.component';

describe('PaypalformComponent', () => {
  let component: PaypalformComponent;
  let fixture: ComponentFixture<PaypalformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaypalformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
