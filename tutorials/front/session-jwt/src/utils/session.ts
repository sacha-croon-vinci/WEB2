import { AuthenticatedUser, MaybeAuthenticUser } from "../types";

const storeAuthenticatedUser = (authenticatedUser: AuthenticatedUser) => {
    localStorage.setItem("authenticatedUser",JSON.stringify(authenticatedUser));
    console.log(authenticatedUser, "has been stored");
}

const getAuthenticatedUser = ():MaybeAuthenticUser => {
    const authenticatedUser = localStorage.getItem("authenticatedUser");
    if(!authenticatedUser) return undefined ;console.log("No users");
    return JSON.parse(authenticatedUser);
}

const clearAuthenticatedUser = () =>{
    localStorage.removeItem("authenticatedUser");
}

export {storeAuthenticatedUser,getAuthenticatedUser,clearAuthenticatedUser}