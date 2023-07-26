import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListingsComponent } from './user-listings.component';

describe('UserListingsComponent', () => {
  let component: UserListingsComponent;
  let fixture: ComponentFixture<UserListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListingsComponent]
    });
    fixture = TestBed.createComponent(UserListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
