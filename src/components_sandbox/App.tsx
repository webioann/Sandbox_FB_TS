import React from 'react'
import DialogModal from './DialogModal'
import './app.css'

function App() {

  const [dialogOpenStatus, setDialogOpenStatus] = React.useState<boolean>(false)

  let A = true
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const openModal = () => {setDialogOpenStatus(true)}
  const closeModal = () => {setDialogOpenStatus(false)}

  return (
    <>
    <form>
      <label htmlFor="browser">Выберите Ваш браузер из списка:</label>
      <input list="browsers" id="browser"/>

      <datalist id="browsers">
        <option value="Edge"/>
        <option value="Firefox"/>
        <option value="Chrome"/>
        <option value="Opera"/>
        <option value="Safari"/>
      </datalist>

    </form>
    <p>Некоторые люди искренне верили в то, что в <time dateTime="2000-01-01 00:01">полночь 2000 года</time> наступит конец света, но, как видите, свет продолжается. Возможно, он закончится в <time dateTime="3000-01-01 00:01">полночь 3000 года</time>, но это не точно</p><button onClick={openModal}>Open modal</button>
<DialogModal dialogOpenStatus={dialogOpenStatus} setDialogOpenStatus={setDialogOpenStatus}/>







</>
  )
}

export default App;