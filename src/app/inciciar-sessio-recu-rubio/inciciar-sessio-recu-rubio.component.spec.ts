import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InciciarSessioRecuRubioComponent } from './inciciar-sessio-recu-rubio.component';

describe('InciciarSessioRecuRubioComponent', () => {
  let component: InciciarSessioRecuRubioComponent;
  let fixture: ComponentFixture<InciciarSessioRecuRubioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InciciarSessioRecuRubioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InciciarSessioRecuRubioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
