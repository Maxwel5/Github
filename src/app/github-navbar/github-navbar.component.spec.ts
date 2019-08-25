import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubNavbarComponent } from './github-navbar.component';

describe('GithubNavbarComponent', () => {
  let component: GithubNavbarComponent;
  let fixture: ComponentFixture<GithubNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
