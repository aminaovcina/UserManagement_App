import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModuleLayoutComponent } from './user-module-layout.component';

describe('UserModuleLayoutComponent', () => {
  let component: UserModuleLayoutComponent;
  let fixture: ComponentFixture<UserModuleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModuleLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModuleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
