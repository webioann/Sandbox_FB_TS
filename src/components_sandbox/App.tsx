import React, { useState } from 'react'
import { collection, deleteDoc, updateDoc, doc, setDoc, addDoc } from "firebase/firestore"; 
import { db } from "../firebase-config";

const App = () => {

    const [startPoint, setStartPoint] = useState(0)
    const [endPoint, setEndPoint] = useState(0)

    const startSession = () => {
        setStartPoint(Date.now());
    }
    const finishSession = () => {
        setEndPoint(Date.now());
    }
    const putTimeStampOnDB = async() => {
        try{
            if( startPoint > 0 && endPoint > 0 ) {
                await addDoc(collection(db, 'user'), {
                    session_data: { a: 'Some data' },
                    tuple: [startPoint, endPoint]
                })
                // reset state for new session
                setStartPoint(0)
                setEndPoint(0)
            }
            else{ alert('Operations is not complited. Try agan') }
        }
        catch{
            throw new Error('Whot went wrong');
        }
    }
    return (
        <div>
            <button onClick={startSession}>Start new Sesssion</button>
            <button onClick={finishSession}>Finish current Session</button>
            <br></br>
            <button onClick={putTimeStampOnDB}>Session is done</button>

        </div>
    )
}

export default App