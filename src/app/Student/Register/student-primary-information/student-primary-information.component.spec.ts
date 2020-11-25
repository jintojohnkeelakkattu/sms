import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPrimaryInformationComponent } from './student-primary-information.component';

describe('StudentPrimaryInformationComponent', () => {
  let component: StudentPrimaryInformationComponent;
  let fixture: ComponentFixture<StudentPrimaryInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPrimaryInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPrimaryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
