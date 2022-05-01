import { i18nMetaToJSDoc } from "@angular/compiler/src/render3/view/i18n/meta";
import { User } from "./main-board/user.model";

export class UserService {
    private user: User[] = [
        new User(
            'Trọng',
            'Tín 1',
            'lenguyentrontin02120@gmail.com',
            '0396455346',
            "02/12/2000",
            'activated',
            {facebook: 'hi', linkedin: '213', twitter:'oh no'}
        ),
        new User(
            'Trọng',
            'Tín 2',
            'lenguyentrontin02120@gmail.com',
            '0396455346',
            "02/12/2000",
            'activated',
            {facebook: 'hi', linkedin: '213', twitter:'oh no'}
        ),
        new User(
            'Trọng',
            'Tín 3',
            'lenguyentrontin02120@gmail.com',
            '0396455346',
            "02/12/2000",
            'activated',
            {facebook: 'hi', linkedin: '213', twitter:'oh no'}
        ),
        new User(
            'Trọng',
            'Tín 4',
            'lenguyentrontin02120@gmail.com',
            '0396455346',
            "02/12/2000",
            'suspended',
            {facebook: 'hi', linkedin: '213', twitter:'oh no'}
        ),
        new User(
            'Trọng',
            'Tín 5',
            'lenguyentrontin02120@gmail.com',
            '0396455346',
            "02/12/2000",
            'suspended',
            {facebook: 'hi', linkedin: '213', twitter:'oh no'}
        )    
    ]
    
    private userFilterd: User [] = [

    ]
    getUser() {
        // return this.user
        return this.user
    }
    addUser(user: User) {
        this.user.push(user)
    }
    deleteUser(id:number) {
        this.user.splice(id,1)
    }
    getActiveUser() {
        this.userFilterd = this.getUser().filter(el => el.status !== 'suspended')
        console.log(this.userFilterd)
    }
    getSuspendUser() {
        this.userFilterd = this.getUser().filter(el => el.status !== 'activated')
        console.log(this.userFilterd)

    }
}