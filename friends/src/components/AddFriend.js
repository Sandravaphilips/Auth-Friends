import React, {useState} from 'react';
import withAuth from '../axios';

const initialFriendForm = {
    name: '',
    age: '',
    email: ''
}
export default function AddFriend() {
    const [friendForm, setFriendForm] = useState(initialFriendForm);

    const onNameChange = e => {
        
        setFriendForm({
          name: e.target.value,
          age: friendForm.age,
          email: friendForm.email
        });
    };
    
    const onAgeChange = e => {
    
        setFriendForm({
            name: friendForm.name,
            age: e.target.value,
            email: friendForm.email
        });
    };

    const onEmailChange = e => {
    
        setFriendForm({
            name: friendForm.name,
            age: friendForm.age,
            email: e.target.value
        });
    };

    function onFormSubmit(e) {
        // e.preventDefault();
        const newFriend = {
            id: Date.now(),
            name: friendForm.name,
            age: friendForm.age,
            email: friendForm.email
        };
        withAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(response => console.log(response))
        .catch(err=> console.log(err))
    }
    return (
        <form onSubmit={onFormSubmit}>
            <label>Name
                <input onChange={onNameChange} value={friendForm.name} name='name' />
            </label><br />

            <label>Age
                <input onChange={onAgeChange} value={friendForm.age} name='age' />
            </label><br />

            <label>Email
                <input onChange={onEmailChange} value={friendForm.email} name='email' />
            </label><br />

            <input type='submit' />
        </form>
    )
}