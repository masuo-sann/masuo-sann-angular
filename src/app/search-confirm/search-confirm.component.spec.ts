import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConfirmComponent } from './search-confirm.component';

describe('SearchConfirmComponent', () => {
  let component: SearchConfirmComponent;
  let fixture: ComponentFixture<SearchConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
