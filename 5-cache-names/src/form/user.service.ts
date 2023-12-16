import { AsyncSubject, Observable, map, share } from "rxjs";
import { ajax } from "rxjs/ajax";
import { User } from "./user.interface";

class UserService {
    readonly uniqNameSequence$ = ajax<User[]>({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=1nf31b2',
        crossDomain: true,
        method: 'GET',
    })
        .pipe(
            map(({response}) => response.map(({profileName}) => profileName)),
            share({
                connector: () => new AsyncSubject(),
                resetOnComplete: false,
            })
        );
}

export const userService = new UserService();
