import React from "react";
import UserList from "../../../Components/Admin/UserList.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import { UsersData } from "../../../Data/UserData";

function Users() {
    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">Users</h2>

                <UserList data={UsersData} users={true} />
            </div>
        </SideBar>
    );
}

export default Users;
