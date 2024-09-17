import Image from 'next/image'
import nof from './image/page_notfound.png';
import './not-found.css'
export default function Notfound(){
    return(
        <div className="Nof">
            <Image
            src ={nof}
            width = {500}
            height = {500}
            alt="Not Found"
            />
            <div className='txt_p'><p>We are Lost! Its saying 404.</p></div>
        </div>
    )
} 