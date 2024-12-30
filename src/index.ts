import { CustomerInfo } from "./classsample";  
import { apiService, ApiResponse } from "./services/apiservice";


let customer:CustomerInfo = new CustomerInfo("John Doe", "1234567890", "123 Main St", true);
console.log(customer.getCustomerInfo());

apiService.get("https://jsonplaceholder.org/users").then((result:ApiResponse[]) => {
    result.forEach((item: ApiResponse) => {
        console.log(item.firstname + " " + item.lastname);
    });
});
