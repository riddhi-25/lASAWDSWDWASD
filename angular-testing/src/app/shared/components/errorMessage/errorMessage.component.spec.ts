import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ErrorMessageComponent } from "./errorMessage.component"
import { By } from "@angular/platform-browser";

describe('ErrorMessageComponent', () => {
    let component: ErrorMessageComponent;
    let fixture: ComponentFixture<ErrorMessageComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ErrorMessageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ErrorMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates component', () => {
        expect(component).toBeTruthy();
    });

    it('renders default error state', () => {
        const messageContainer=fixture.debugElement.query(By.css('[data-testid="message-container"]'));
        expect(messageContainer.nativeElement.textContent).toEqual('something went wrong');
    });

    it("custom error message",()=>{
        component.message='Email is already token';
        fixture.detectChanges();
        const messageContainer=fixture.debugElement.query(By.css('[data-testid="message-container"]'));
        expect(messageContainer.nativeElement.textContent).toEqual('Email is already token');
    });
});