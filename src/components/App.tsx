import React, { useState, useEffect } from 'react'
import { collection, getDocs, doc } from "firebase/firestore"; 
import { db } from "../firebase-config";
import './app.scss'

interface IUser {
    name: string
    age: number
    id?: string
}

function App() {
    const usersCollection = collection(db, "users")
    const[users, setUsers] = useState<IUser[] | []>([])

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollection);
            const raw: Array<any> = [];
            data.docs.map((document) => {
                raw.push({
                    id: document.id, // because id field in separate function in firestore
                    ...document.data(), // the remaining fields
                });
            });
            setUsers(raw);
        }
        getUsers()
    }, [])

    // console.log(`USERS = ${JSON.stringify(users)}`)

    return (
        <div className='container'>
            { users.map((user) => (
                <div key={user.id} className='user'>
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                </div>
            )) }
            CRUD
        </div>
    )

}
export default App;
