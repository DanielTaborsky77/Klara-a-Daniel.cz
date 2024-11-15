import './Gifts.css';
import GiftsPicture from '../Assets/IMG_9562_Mod.png';

const Gifts = () => {
    return (
        <div className='Gifts'>
            <p className='Gifts-Title'>Dary</p>
            <div className='Gifts-Content'>
                <div className='Gifts-Content-Info'>
                    <p className='Gifts-Content-Text'>
                        Pokud nám budete chtít něco darovat do našeho společného života,
                        z praktických důvodů bychom nejvíce ocenili a byli moc vděční za peněžní dar.
                    </p>
                    <p className='Gifts-Content-Signature'>Klára a Daniel</p>
                    
                </div>
                <img className='Gifts-Picture' src={GiftsPicture} alt="" />
            </div>

        </div>
    )
}

export default Gifts;