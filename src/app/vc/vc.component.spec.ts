import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcComponent } from './vc.component';

describe('VcComponent', () => {
  let component: VcComponent;
  let fixture: ComponentFixture<VcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
