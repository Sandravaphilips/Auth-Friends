import React, {useEffect, useState} from 'react';
import withAuth from '../axios';
import Friend from './Friend';
import AddFriend from './AddFriend';


export default function FriendsList() {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        withAuth().get('http://localhost:5000/api/friends')
        .then(response=> {
            setFriends(response.data)
        })
        .catch(err => console.log(err))
    });

    return (
        <div>
            <AddFriend />
            <div>
                {friends.map(friend => 
                    <Friend key={friend.id} friend={friend}/>
                )}
            </div> 
        </div>
    )
}