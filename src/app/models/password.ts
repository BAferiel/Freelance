export class Password {
    type!: string;
    value!: string;
    temporary!: false;
    constructor() {
        this.type = 'password';
        this.value = '';
        this.temporary = false;
    }
}