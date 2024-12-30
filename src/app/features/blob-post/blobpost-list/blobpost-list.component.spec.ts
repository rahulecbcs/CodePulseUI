import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobpostListComponent } from './blobpost-list.component';

describe('BlobpostListComponent', () => {
  let component: BlobpostListComponent;
  let fixture: ComponentFixture<BlobpostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlobpostListComponent]
    });
    fixture = TestBed.createComponent(BlobpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
