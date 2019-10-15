import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Friend from './Friend';

export default function FriendsList() {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        Axios.get('/api/friends')
        .then(response=> {
            setFriends(response.data)
        })
        .catch(err => console.log(err))
    });

    return (
        <div>
            {friends.map(friend => 
                <Friend key={friend.id} friend={friend}/>
            )}
        </div>
    )
}