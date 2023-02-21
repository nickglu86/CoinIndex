const UserPage = (params) => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return(
        <div>
            <h2>I'm a user page</h2>
            <p>User Id : {userData.userId}</p>
            <p>User email: {userData.userEmail}</p>
            <p>User password: {userData.userPassword}</p>
        </div>
    )
}

export default UserPage