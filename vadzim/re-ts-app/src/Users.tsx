import React from 'react';
import User from './User';
import './Users.css';

export default function Users(props: any) {
    let userArr: Array<User> = props.users;

    /* Array in der Konsole zweimal, die Komponente wurde 2 man aufgerufen */
    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>website</th>
                </tr>
            </thead>
            <tbody>
                {renderUsers(userArr)}
            </tbody>
        </table>
    )
    function renderUsers(arr: Array<User>) {
        return arr.map(item => {
            return(
            <tr key={item.id.toString()} className={item.id % 2 == 0 ? 'gerade' : 'ungerade'}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.website}</td>
            </tr>)
        })
    }
}