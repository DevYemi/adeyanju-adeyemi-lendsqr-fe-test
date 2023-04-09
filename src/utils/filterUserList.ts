import { userRequestResultTypes } from "@/redux-toolkit/api/types";

export interface userListFilterObject {
    organisation: string,
    userName: string,
    email: string,
    date: string,
    phoneNumber: string,
    status: string
}


export default function filterUserListBy(userList: userRequestResultTypes[], filterBy: userListFilterObject) {
    let filteredArray: userRequestResultTypes[] = [];

    filteredArray = userList.filter(user => {

        if (filterBy.organisation !== "" && filterBy.organisation !== user.orgName) {
            return false
        }

        if (filterBy.userName !== "" && filterBy.userName !== user.userName) {
            return false
        }
        if (filterBy.email !== "" && filterBy.email !== user.email) {
            return false
        }
        if (filterBy.phoneNumber !== "" && filterBy.phoneNumber !== user.phoneNumber) {
            return false
        }
        // if (filterBy.status !== "" && filterBy.status !== user.status) {
        //    return false


        return true;
    })

    return filteredArray
}