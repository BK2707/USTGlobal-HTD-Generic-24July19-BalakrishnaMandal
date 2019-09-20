import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrributeDirectivesComponent } from './atrribute-directives.component';

describe('AtrributeDirectivesComponent', () => {
  let component: AtrributeDirectivesComponent;
  let fixture: ComponentFixture<AtrributeDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrributeDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
