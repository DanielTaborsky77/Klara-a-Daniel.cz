import './Info.css'

const Info = () => {
    return (
        <div className='Info' id='Info'>
            <p className='Info-Title'>Kdy a Kde?</p>
            <p className='Info-Item'>Obřad? <a href="https://mapy.cz/letecka?source=addr&id=12735939&ds=1&x=12.1999649&y=50.2161649&z=17">Bratrská 2960/40 352 01 Aš</a> od <strong>11:00</strong></p>
            <p className='Info-Item'>Hostina? <a href='https://mapy.cz/letecka?q=Kr%C3%A1sn%C3%A1%20243%2C%20352%2001%20Kr%C3%A1sn%C3%A1&source=addr&id=9483503&ds=1&x=12.1715357&y=50.2365396&z=17'>Krásná 243, 352 01 Krásná</a></p>
        </div>
    )
}

export default Info;