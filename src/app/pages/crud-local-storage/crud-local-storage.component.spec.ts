import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLocalStorageComponent } from './crud-local-storage.component';

describe('CrudLocalStorageComponent', () => {
  let component: CrudLocalStorageComponent;
  let fixture: ComponentFixture<CrudLocalStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudLocalStorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
