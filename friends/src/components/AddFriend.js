import React from 'react';

export default function AddFriend() {
    return (
        <form>
            <label>Name
                <input name='name' />
            </label><br />

            <label>Age
                <input name='age' />
            </label><br />

            <label>Email
                <input name='email' />
            </label><br />

            <input type='submit' />
        </form>
    )
}