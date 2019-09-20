import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class UserService{
    users = [
        {
            name:'Balakrishna',
            company:'UST Global'
        },
        {
            name:'Abhinash',
            company:'UST Global'
        },
        {
            name:'Krishna',
            company:'Test Yantra'
        }

    ];

}