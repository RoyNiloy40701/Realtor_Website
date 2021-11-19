import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState({});
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch(`https://agile-beyond-87526.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [refresh])

    const handleUpdate = (id, user) => {
        console.log(user);
        const url = `https://agile-beyond-87526.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setRefresh(true);
                }
            })
    }



    const handleNewAdmin = (id, user) => {
        //Update Status

        const url = `https://agile-beyond-87526.herokuapp.com/addAdmin/${user.email}`;
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Added as admin successfully");
                    handleUpdate(id, user);

                }
            })
    }


    return (
        <div>
            Make an admin
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">User Status</th>
                            <th scope="col">Make Admin</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(users).length !== 0 &&
                            users.map(user =>
                                <tr key={user._id}>
                                    <th className="align-middle" scope="row">{(user._id).slice(0, 10)}...</th>
                                    <td className="align-middle">{user.displayName}</td>
                                    <td className="align-middle">{user.email}</td>
                                    <td className={`${(user.status === 'customer') ? 'badge bg-warning mt-2' : 'badge bg-success mt-2'}`}>{user.status}</td>
                                    <td>
                                        {
                                            (user.status === 'customer') &&
                                            <button onClick={() => handleNewAdmin(user._id, user)} className="btn btn-success p-1 me-2  btn-sm">Make Admin</button>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;