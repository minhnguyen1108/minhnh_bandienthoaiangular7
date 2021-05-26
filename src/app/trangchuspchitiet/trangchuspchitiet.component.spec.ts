import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchuspchitietComponent } from './trangchuspchitiet.component';

describe('TrangchuspchitietComponent', () => {
  let component: TrangchuspchitietComponent;
  let fixture: ComponentFixture<TrangchuspchitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangchuspchitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchuspchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
