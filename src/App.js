import { useEffect, useState } from 'react'

function MyButton() {
    
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    return (
        <button>
            I'm a button
        </button>
    );
}

export default App;