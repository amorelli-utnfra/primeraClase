import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDatosComponent } from './mis-datos.component';

describe('MisDatosComponent', () => {
  let component: MisDatosComponent;
  let fixture: ComponentFixture<MisDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
