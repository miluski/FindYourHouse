import { UserState } from "../../utils/types/State";

export function validateData(user: UserState): boolean {
    if (!user.name || user.name.trim().length === 0) {
        return false;
    }
    if (user.surname && user.surname.trim().length === 0) {
        return false;
    }
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!user.email || !emailRegex.test(user.email)) {
        console.log("chej", user)
        return false;
    }
    const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
    if (user.phoneNumber && !phoneNumberRegex.test(user.phoneNumber)) {
        return false;
    }
    return true;
}