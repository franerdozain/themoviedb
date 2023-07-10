import Card from './Card'

export default function ContentList ({ content, setSelectedTitle }) {    
    return (
        <>
        
         {content && content.length ? (
            content.map(item => <Card key={item.id} item={item}  setSelectedTitle={setSelectedTitle}/>)
            ) : (
                <h1>Nothing to show</h1>
            )
         }             
        </>
    )
}