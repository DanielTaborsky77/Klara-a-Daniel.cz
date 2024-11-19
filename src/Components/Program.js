import './Program.css';
import Church from '../Assets/church.png';
import Lunch from '../Assets/lunch.png';
import Photo from '../Assets/photo.png';
import Cake from '../Assets/cake.png';
import Raut from '../Assets/raut.png';
import Line from '../Assets/line.png';
import ProgramPhoto1 from '../Assets/IMG_9401.JPG';
import ProgramPhoto2 from '../Assets/IMG_9733.JPG';

const Program = () => {
    return (
        <div className='Program' id='Program'>
            <p className='Program-Title'>Program</p>
            <div className='Program-Content'>
                <div className='Program-Items'>
                    <div className='Program-Item'>
                        <p><strong>11:00</strong> Obřad</p>
                        <img src={Church} alt="Church" />
                    </div>
                    <img className='Program-Items-Line' src={Line} alt="Line" />
                    <div className='Program-Item'>
                        <p><strong>14:00</strong> Oběd</p>
                        <img src={Lunch} alt="Lunch" />
                    </div>
                    <img className='Program-Items-Line' src={Line} alt="Line" />
                    <div className='Program-Item'>
                        <p><strong>15:00</strong> Focení s novomanžely</p>
                        <img src={Photo} alt="Photo" />
                    </div>
                    <img className='Program-Items-Line' src={Line} alt="Line" />
                    <div className='Program-Item'>
                        <p><strong>16:00</strong> Krájení dortu</p>
                        <img src={Cake} alt="Cake" />
                    </div>
                    <img className='Program-Items-Line' src={Line} alt="Line" />
                    <div className='Program-Item'>
                        <p><strong>18:00</strong> Raut</p>
                        <img src={Raut} alt="Raut" />
                    </div>
                </div>

                <div className='Program-Photos'>
                    <img className='Program-Photo-One' src={ProgramPhoto1} alt="ProgramPhoto1" />
                    <img className='Program-Photo-Two' src={ProgramPhoto2} alt="ProgramPhoto2" />
                </div>
            </div>
        </div>
    )
}

export default Program;