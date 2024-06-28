import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedenriandoListasComponent } from './redenriando-listas.component';

describe('RedenriandoListasComponent', () => {
  let component: RedenriandoListasComponent;
  let fixture: ComponentFixture<RedenriandoListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedenriandoListasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedenriandoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
