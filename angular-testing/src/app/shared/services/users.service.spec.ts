import { UsersInterface } from "./user.interface";
import { UsersService } from "./user.service";
import { TestBed } from '@angular/core/testing'
import { UtilsService } from "./utils.service";

describe('UsersService', () => {
    let userservice: UsersService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsersService],
        });
        userservice = TestBed.inject(UsersService);

    });
    it('create a service', () => {
        expect(userservice).toBeTruthy();
    });

    describe('addUser', () => {
        it('should add a user', () => {
            const user: UsersInterface = {
                id: '3',
                name: "foo"
            }
            userservice.addUser(user);
            expect(userservice.users$.getValue()).toEqual([{ id: '3', name: 'foo' }]);
        });
    });
    describe('remove user', () => {
        it("should removea user", () => {
            userservice.users$.next([{ id: '3', name: 'foo' }]);
            userservice.removeUser("3");
            expect(userservice.users$.getValue()).toEqual([]);
        });
    });
});