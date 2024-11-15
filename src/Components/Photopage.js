import './Photopage.css';
import PhotoOne from '../Assets/IMG_9468.JPG';
import PhotoTwo from '../Assets/IMG_9677.JPG';
import PhotoThree from '../Assets/IMG_9778.JPG';
const Photopage = () => {
    return(
        <div className='Photopage'>
            <p className='Photopage-Verse'>Chtěli bychom si před Bohem a Vámi vyznat naši Lásku</p> 
            <div className='Photopage-Photos'>
                <img src={PhotoOne} alt="" />
                <img src={PhotoTwo} alt="" />
                <img src={PhotoThree} alt="" />
            </div>
        </div>
    )
}

export default Photopage;