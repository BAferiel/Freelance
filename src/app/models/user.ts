import { Password } from "./password";

export class User {
    
    username!: string;
    email!: string;
    emailVerified!: false;
    enabled!:false;
    credentials!:Password
    constructor() {
        this.username = '';
        this.email = '';
        this.emailVerified = false;
        this.enabled = false;
    }
}