import React, { useEffect, useState } from 'react'
import DialogModal from './DialogModal'
import SimpleComponent from './SimpleComponent'
import './app.css'

function App() {

  const [dialogOpenStatus, setDialogOpenStatus] = React.useState<boolean>(false)
  const mochArray= ['apple ', 'banana ', 'orange ', 'carrot ', 'kiwi ', 'onion']
  const openModal = () => {setDialogOpenStatus(true)}
  const [result, setResult] = useState<string | undefined>('')
  const [sentence, setSentence] = useState<string | undefined>('')
  localStorage.setItem('ITEM', 'Item from storage')

  const worker = () => {
    let randomIndex = (Math.floor(Math.random() * 6))
    setResult(mochArray.at(randomIndex))
    let raw = localStorage.getItem('ITEM')
    if(raw) {
      setSentence(raw)
    }
    // sentence.padStart(30)
  }

  return (
    <>
    <h1>Header title</h1>
    <SimpleComponent/>
    <h2 className="result">
      RESULTS : {result}
    </h2>
    <h2 className="result">
      SENTENCE : {sentence}
    </h2>

    <br />
    <button onClick={worker}>
      work
    </button>
    <div className="modal-wrapper">
      <button onClick={openModal}>Open modal</button>
      <DialogModal 
        dialogOpenStatus={dialogOpenStatus} 
        setDialogOpenStatus={setDialogOpenStatus}
      />
    </div>







  </>
  )
}
export default App;