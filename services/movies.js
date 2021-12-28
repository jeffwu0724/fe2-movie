import Socket from "./Socket";
import { moviesUrl, moviesEPs } from "../config/config.json";

const localStorage = require("local-storage");

async function search(type, input) {
    console.log(type)
    console.log(input)
    console.log('/?${type}=${input}')
    const email = localStorage.get("email")
    const session_id = localStorage.get("session")
    
    const payLoad = {
        type: type,
        input: input
    };

    const options = {
        baseURL: moviesUrl, // Base URL
        url: moviesEPs.searchEP + '/?' + type + '=' + input, // Path of URL
        headers: {
            email: email,
            session_id: session_id
          },
        data: payLoad // Data to send in Body
    }

    return await Socket.GET(options);
}


export default {
    search
};
