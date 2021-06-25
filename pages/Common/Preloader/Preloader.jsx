import preloader from '../../assets/images/preloader.svg';
import Image from 'next/image'

let Preloader = (props) => {
    return (
        <div style={{ width: '150px', height: '150px', alignSelf: 'center' }}>
            <Image src={preloader} alt="img" />
        </div>
    );
};

export default Preloader;