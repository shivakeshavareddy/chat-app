import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendCRUDComponent } from './friend-crud.component';

describe('FriendCRUDComponent', () => {
  let component: FriendCRUDComponent;
  let fixture: ComponentFixture<FriendCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
