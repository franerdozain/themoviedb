import { useState } from 'react'
import Card from './Card'

export default function ContentList () {
    const [content, setContent] = useState([])
    return (
        <>
         {content.map(item => <Card />)}             
        </>
    )
}