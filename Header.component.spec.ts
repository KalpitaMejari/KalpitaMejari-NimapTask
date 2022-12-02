import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeadComponent } from './Header.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeadComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeadComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NimapTask'`, () => {
    const fixture = TestBed.createComponent(HeadComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('NimapTask');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeadComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('NimapTask app is running!');
  });
});
