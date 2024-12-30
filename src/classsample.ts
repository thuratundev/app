export class CustomerInfo {
    name: string;
    phoneno: string;
    address: string;
    allowcredit: boolean;

    constructor (name: string, phoneno: string, address : string, allowcredit: boolean) {
        this.name = name;
        this.phoneno = phoneno;
        this.address = address;
        this.allowcredit = allowcredit;
    }

    getCustomerInfo() {
        return this.name + " " + this.phoneno + " " + this.address + " " + this.allowcredit;
    }
}