import React from 'react';

export default function Friend({friend}) {
    const { name, age, email } = friend;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email Address: {email}</p>
        </div>
    )
}