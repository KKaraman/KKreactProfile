// import React from "react";

const UsersPage = () => {

    return(
        <div>
            <ul>
                {["John", "Jimmy", "Jill", "Janet"].map((user, idx) => {
                     return <li key={idx}>{user}</li>
                })}
            </ul>
        </div>    

    );
}

export default UsersPage;