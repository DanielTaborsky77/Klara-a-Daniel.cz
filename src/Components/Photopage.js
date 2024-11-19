import './Photopage.css';
import PhotoOne from '../Assets/IMG_9468.JPG';
import PhotoTwo from '../Assets/IMG_9677.JPG';
import PhotoThree from '../Assets/IMG_9778.JPG';
const Photopage = () => {
    return(
        <div className='Photopage' id='Photopage'>
            <p className='Photopage-Verse'>Každý dům přece někdo postavil a stavitelem všeho je Bůh. <br />Židům 3, 4</p> 
            <div className='Photopage-Photos'>
                <img src={PhotoOne} alt="" />
                <img src={PhotoTwo} alt="" />
                <img src={PhotoThree} alt="" />
            </div>
        </div>
    )
}

export default Photopage;