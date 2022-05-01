import { Social } from "./social.model";

export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public DOB: string,
        public status: string,
        public social?: Social
    ) {}
}