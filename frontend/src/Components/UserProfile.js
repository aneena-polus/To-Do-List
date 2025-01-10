import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

function UserProfile() {

    const { userData } = useContext(AuthContext);

    return (
        <div className='container mt-4'>
            <h2>Hello {userData.firstName}!</h2>
            <div className="card text-dark card-design2 mt-3">
                <div className="card-body text-dark">
                    <p><strong>Username: </strong>{userData.username}</p>
                    <p><strong>First Name: </strong>{userData.firstName}</p>
                    <p><strong>Last Name: </strong>{userData.lastName}</p>
                    <p><strong>Email: </strong>{userData.email}</p>
                    <p><strong>Phone Number: </strong>{userData.phoneNumber}</p>
                    <p><strong>Country: </strong>{userData.country}</p>
                    <p><strong>State: </strong>{userData.state}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile