export class User {

    id: number;
    name: string;
    email: string;
    createdAt: Date;
    gender?: string | null;

    constructor(id: number, name: string, email: string, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
        
    }

    IsMale():boolean{
        return this.gender == "M" ? true : false;   
    }

    greeting(name: string) {
        let count = 0;
        console.log(`Hello ${name}, I'm ${this.name}`);
        return {
            greetingcount: () => {
                count++;
                console.log(count);
            }
        };
    }


}