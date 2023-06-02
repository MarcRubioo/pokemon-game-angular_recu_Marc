import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMarcRubiooComponent } from './color-marc-rubioo.component';

describe('ColorMarcRubiooComponent', () => {
  let component: ColorMarcRubiooComponent;
  let fixture: ComponentFixture<ColorMarcRubiooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorMarcRubiooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorMarcRubiooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
