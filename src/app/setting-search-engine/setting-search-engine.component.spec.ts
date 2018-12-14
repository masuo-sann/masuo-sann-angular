import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSearchEngineComponent } from './setting-search-engine.component';

describe('SettingSearchEngineComponent', () => {
  let component: SettingSearchEngineComponent;
  let fixture: ComponentFixture<SettingSearchEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingSearchEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
