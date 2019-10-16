import React, {useEffect, useState} from 'react';
import withAuth from '../axios';
import Friend from './Friend';
import AddFriend from './AddFriend';
import styled from 'styled-components';

const FriendsStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export default function FriendsList(props) {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        withAuth().get('http://localhost:5000/api/friends')
        .then(response=> {
            setFriends(response.data)
        })
        .catch(err => console.log(err))
    });

    return (
        <FriendsStyle>
            <AddFriend />
            <div>
                {friends.map(friend => 
                    <Friend key={friend.id} friend={friend}/>
                )}
            </div> 
        </FriendsStyle>
    )
}