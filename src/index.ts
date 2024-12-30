import { apiService } from "./services/apiservice";
import { User } from "./models/user";


async function getUserInfo(): Promise<User[]> {
    let result: User[] = await apiService.get("https://jsonplaceholder.org/users");
    return result;
}


async function doInit() {
    console.log("doInit - start");

        await getUserInfo().then((result: User[]) => {
            result.forEach((item: User) => {
                console.log(item.firstname + " " + item.lastname);

            });
        }).catch((error: Error) => {
            console.log("Error: " + error.message);
        });


    console.log("doInit - end");
}


doInit();

