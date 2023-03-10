import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!');
  });
});

describe('Compute', () => {
  it('should return 3 if input is 1 plus 2', () => {
    const app = new AppComponent();
    const result = app.add(1,2);
    expect(result).toBe(3);
  })

  it('should return 3 if input is 1 plus 2', () => {
    const app = new AppComponent();
    const result = app.add(1,2);
    expect(result).toBeGreaterThan(2)
  })
});
