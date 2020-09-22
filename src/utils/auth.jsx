import jwtDecode from "jwt-decode";

export function getUser() {
    try {
        const jwt = sessionStorage.getItem('authToken');
        return jwtDecode(jwt);
    } catch (ex) {
        console.log("Not logged");
    }
}


