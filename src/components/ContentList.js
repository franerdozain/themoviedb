import Card from './Card'

export default function ContentList({ content, setSelectedTitle }) {
    return (
        <div className='row w-100 justify-content-evenly'>
            {content && content.length ? (
                content.map(item =>
                <div key={item.id} className='cardDiv col-md-3 mb-4'>
                     <Card  item={item} setSelectedTitle={setSelectedTitle} />
                </div>
                )
            ) : (
                <h1>Nothing to show</h1>
            )
            }
        </div>
    )
}