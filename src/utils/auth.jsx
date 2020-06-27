import jwtDecode from "jwt-decode";

export function getUser() {
    try {
        const jwt = localStorage.getItem('authToken');
        return jwtDecode(jwt);
    } catch (ex) {}

}


