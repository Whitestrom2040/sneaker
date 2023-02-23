import React, { useState } from 'react'
import './Style/SneakersSecond.css'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux/es/exports';
import { showdata } from './SneakersSlice';
import shoes1 from '../Image/image-product-1.jpg'

const SneakersSecond = () => {

    const [counter, setCounter] = useState<number>(0);

    const dispatch = useDispatch<any>();
    const sentData = () => {
        if (counter !== 0) {
            dispatch(showdata({
                count: counter,
                img: shoes1,
                price: "125.00",
                total: (125 * counter)
            }))
            setCounter(0)
        }
    }

    const myVal = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className='shoes-second-section' >
            <div className='shoes-details' >
                <h4>SNEAKER COMPANY</h4>
                <h1>Fall Limited Edition Sneakers</h1>
                <p> These low-profile sneakers are your perfect casual wear <br />
                    companion. Featuring a durable rubber outer sole, they’ll <br />
                    withstand everything the weather can offer.</p>
                <div className='shoes-prise' >
                    <p> $125.00 </p>
                    <span> 50% </span>
                </div>
                <div className='big-price' >
                    <del>$250.00</del>
                </div>
                <div className='many-buttons' >
                    <div className='other-small-btn'>
                        <button style={{ cursor: "pointer" }} onClick={myVal} > - </button>
                        <span> {counter} </span>
                        <button style={{ cursor: "pointer" }} onClick={() => setCounter(counter + 1)} > + </button>
                    </div>
                    <div className='one-big-btn' >
                        <button onClick={sentData} > <BsCart3 /> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SneakersSecond