import { useState } from 'react'
import Card from './Card'

export default function ContentList ({ content }) {
    // const [content, setContent] = useState([])
    

    return (
        <>
         {content.length ? (
            content.map(item => <Card key={item.id} item={item}/>)
            ) : (
                <h1>Nothing to show</h1>
            )
         }             
        </>
    )
}