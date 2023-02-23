import { Modal } from 'antd';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Style/ImagePopup.css'
import shoes1 from '../Image/image-product-1.jpg'
import shoes2 from '../Image/image-product-2.jpg'
import shoes3 from '../Image/image-product-3.jpg'
import shoes4 from '../Image/image-product-4.jpg'
import { MdNavigateBefore } from 'react-icons/md'
import { MdNavigateNext } from 'react-icons/md'

const ImagePopup = ({ isModalOpen, handleOk, handleCancel }: any) => {

    return (
        <>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Carousel >
                    <div className='small-products' >
                        <img src={shoes1} alt="" />
                    </div>
                    <div className='small-products' >
                        <img src={shoes2} alt="" />
                    </div>
                    <div className='small-products' >
                        <img src={shoes3} alt="" />
                    </div>
                    <div className='small-products' >
                        <img src={shoes4} alt="" />
                    </div>
                </Carousel>
                <div className='prenext-btn' >
                    <span><MdNavigateBefore className='previous' /></span>
                    <span><MdNavigateNext className='next'  /></span>
                </div>
            </Modal>
        </>
    );
};

export default ImagePopup;