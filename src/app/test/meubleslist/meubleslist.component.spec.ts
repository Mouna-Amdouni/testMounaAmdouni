import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeubleslistComponent } from './meubleslist.component';

describe('MeubleslistComponent', () => {
  let component: MeubleslistComponent;
  let fixture: ComponentFixture<MeubleslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeubleslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeubleslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
