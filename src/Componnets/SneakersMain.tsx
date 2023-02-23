import React, { useState, useEffect } from 'react'
import './Style/SneakersMain.css'
import yellowshoes from '../Image/image-product-1.jpg'
import shoes1 from '../Image/image-product-1.jpg'
import shoes2 from '../Image/image-product-2.jpg'
import shoes3 from '../Image/image-product-3.jpg'
import shoes4 from '../Image/image-product-4.jpg'
import SneakersSecond from './SneakersSecond'
import ImagePopup from './ImagePopup'

const SneakersMain = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setSmallimage(yellowshoes)
    }, [])

    const [smallimage, setSmallimage] = useState('');
    console.log('smallimage>>', smallimage);

    const changeImage = (e: any) => {
        setSmallimage(e.target.src);
    }

    return (
        <>
            <div className='sneak-main-section' >
                <div className='big-shoes-image' >
                    <img src={smallimage || yellowshoes} alt="" onClick={showModal} />
                    <div className='small-boxes-image' >
                        <div className='mini-images'>
                            <img src={shoes1} alt="" onClick={changeImage}
                                className={`${smallimage.includes(shoes1) ? "flextion" : "mini-images"}`} />
                        </div>
                        <div className='mini-images'>
                            <img src={shoes2} alt="" onClick={changeImage}
                                className={`${smallimage.includes(shoes2) ? "flextion" : "mini-images"}`} />
                        </div>
                        <div className='mini-images'>
                            <img src={shoes3} alt="" onClick={changeImage}
                                className={`${smallimage.includes(shoes3) ? "flextion" : "mini-images"}`} />
                        </div>
                        <div className='mini-images'>
                            <img src={shoes4} alt="" onClick={changeImage}
                                className={`${smallimage.includes(shoes4) ? "flextion" : "mini-images"}`} />
                        </div>
                    </div>
                </div>
                <SneakersSecond />
                <ImagePopup isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
            </div>
        </>
    )
}

export default SneakersMain