import React, { Dispatch, SetStateAction }  from 'react'
const image = require('../assets/image.jpg')
import './app.css'

type modalProps = {
    dialogOpenStatus: boolean
    setDialogOpenStatus: Dispatch<SetStateAction<boolean>>
}

const DialogModal: React.FC<modalProps> = ({dialogOpenStatus, setDialogOpenStatus}) => {
    const [tooltipIsopen, setTooltipIsOpen] = React.useState<boolean>(false)
    const [progress, setProgress] = React.useState<number>(1)

    const dialogRef = React.useRef<HTMLDialogElement>(null)

    const moveProgress = () => {
        if(progress == 10) {
            setTooltipIsOpen(true)
            setTimeout(() => setTooltipIsOpen(false), 2000)
            setProgress(prev => prev + 1)
        }
        if(progress > 10) {
        setTooltipIsOpen(true)
        setTimeout(() => setTooltipIsOpen(false), 2000)
        setProgress(1)
        }
        setProgress(prev => prev + 1)
    }
    const closeModal = () => { dialogRef.current?.close() }

    return (
    <dialog open={dialogOpenStatus} className='modal'>
        <h1>Modal content</h1>
        <figure>
        <img src={image} width={320} height={180}/>
        <figcaption>Рис. 1 - Toronto.</figcaption>
        </figure>
        <label htmlFor="disk_d">Использование диска "D":</label>
        <label htmlFor="progressbar">Процесс загрузки:</label>
        <progress id="progressbar" max="10" value={progress}>{`${progress}%`}</progress>    
        <br/>
        <br/>
        <button onClick={() => setDialogOpenStatus(false)}>Close modal</button>
        <br/>
        <br/>
        <br/>
        <div>
            <dialog open={tooltipIsopen} className='tooltip'>Progress is complited</dialog>
            <button onClick={moveProgress}>Counter</button>
        </div>
        
        <br/>
        <br/>
        Открытое диалоговое окно
    </dialog>
    )
}

export default DialogModal;