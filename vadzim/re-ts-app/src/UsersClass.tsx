import React from 'react';
import User from './User';

export default class UsersClass extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: Array<User>()
        }
    }
    fetchUsers() {
        // let usersArr = Array<User>();
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            // .then(json => renderUsers(json))
            // .then(smth => console.log(smth)) 
            .then(json => this.setState({
                users: json
            }))
    }

    render() {
        return (
            <>
                <button onClick={() => this.fetchUsers()}>fetch</button>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((item: User) => {
                            return(
                            <tr key={item.id.toString()} className={item.id % 2 == 0 ? 'gerade' : 'ungerade'}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.website}</td>
                            </tr>)})}
                    </tbody>
                </table>
            </>
        )
    }
}