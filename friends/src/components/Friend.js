import React from 'react';
import styled from 'styled-components';

const FriendStyle = styled.div`
    border: 1px solid green;
    margin: 20px 0;
    border-radius: 5px;
    padding-left: 10px;
    background-color: blue;
    width: 50%;
`

export default function Friend({friend}) {
    const { name, age, email } = friend;

    return (
        <FriendStyle>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email Address: {email}</p>
        </FriendStyle>
    )
}