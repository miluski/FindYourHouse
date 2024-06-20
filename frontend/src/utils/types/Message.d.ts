import { UserData } from "./UserData";

export type Message = {
    id?: number;
    content: string;
    type: "income" | "outcome";
    user: UserData;
    fromEmail: string;
    fromNameAndSurname: string;
}