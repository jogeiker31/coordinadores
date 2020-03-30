/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HorasExcedidasComponent } from './horas-excedidas.component';

describe('HorasExcedidasComponent', () => {
  let component: HorasExcedidasComponent;
  let fixture: ComponentFixture<HorasExcedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorasExcedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasExcedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
