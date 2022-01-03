import React from 'react'
import "./ReciepeList.css"

export default function ReciepeList() {
    let data = JSON.parse(localStorage.getItem("Items"))
    console.log(data)
    data.forEach(element => {
        console.log(element.title)
        

    })

    return (
        <div className='list'>
            
        </div>
    )
}
