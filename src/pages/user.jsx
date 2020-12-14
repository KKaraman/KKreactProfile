const UserInfo = ({match}) => {

    return(
        <h1>Welcome User {match.params.name} </h1>

    );
}

export default UserInfo;