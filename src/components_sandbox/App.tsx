import React from 'react'

function App() {
    let text = 'Вывод скрипта будет следующим'

    let isBoss = confirm('You are boss hire')
    // alert('Hello from top')
    
    console.log(Boolean(isBoss));
    // console.log(Object.isFrozen(target))

        return (
        <div>App Sandbox</div>
    )
}

export default App