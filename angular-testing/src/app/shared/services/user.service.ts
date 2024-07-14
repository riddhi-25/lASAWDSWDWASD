import { Injectable } from "@angular/core";
import { UsersInterface } from "./user.interface";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class UsersService {

 
    users$=new BehaviorSubject<UsersInterface[]>([]);

    addUser(user: UsersInterface): void {
        this.users$.next([...this.users$.getValue(), user]);
    }

    removeUser(userId: string): void {
        const updatedUsers = this.users$.getValue().filter((user) => userId != user.id);
        this.users$.next(updatedUsers);
    }

    
}