/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AulaComponent } from './aula.component';

describe('AulaComponent', () => {
  let component: AulaComponent;
  let fixture: ComponentFixture<AulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
