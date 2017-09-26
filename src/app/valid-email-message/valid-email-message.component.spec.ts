import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidEmailMessageComponent } from './valid-email-message.component';

describe('ValidEmailMessageComponent', () => {
  let component: ValidEmailMessageComponent;
  let fixture: ComponentFixture<ValidEmailMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidEmailMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidEmailMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
