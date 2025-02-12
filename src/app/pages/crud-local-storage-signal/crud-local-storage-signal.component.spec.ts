import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLocalStorageSignalComponent } from './crud-local-storage-signal.component';

describe('CrudLocalStorageSignalComponent', () => {
  let component: CrudLocalStorageSignalComponent;
  let fixture: ComponentFixture<CrudLocalStorageSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudLocalStorageSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudLocalStorageSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
