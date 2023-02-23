import React from 'react'
import './Style/NavbarRight.css'
import { BsCart3 } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'
import profile from '../Image/image-avatar.png'
import { Popover } from 'antd'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { deleteRightData } from './SneakersSlice'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

const NevbarRight = () => {

  const dispatch = useDispatch();

  const cartSelector: any = useSelector((state: any) => state.sneakers.value)

  const text = <span className='cart-title'> Cart </span>;

  const content1 = (
    <div className='empty-cart' >
      <p>Your cart is empty.</p>
    </div>
  )

  const content = (
    <>
      <div className='popup-satting' >
        <img src={cartSelector.img} alt="" />
        <div className='limited-edition' >
          <p>Fall Limited Edition Sneakers</p>
          <div className='price-total' >
            <span style={{ color: 'gray' }} >{`${cartSelector.price} x`} </span>
            <span>{cartSelector.count} </span>
            <b> <span>${cartSelector.total}.00</span> </b>
          </div>
        </div>
        <span className='delete-popup'> <RiDeleteBin5Line onClick={() => dispatch(deleteRightData())} /></span>
      </div>
      <div className='checkout-btn' >
        <button>Checkout</button>
      </div>
    </>
  );

  return (
    <>
      <div className='nav-last'>
        <Popover placement="bottom" className='popup-main' title={text}
          content={cartSelector.length == 0 ? content1 : content} trigger="click">
          <span style={{ cursor: "pointer" }} ><BsCart3 /></span>
          {cartSelector.length <= 0 ? '' : <p className='cart-count' >{cartSelector.count}</p>}
        </Popover>
        <div className='right-image' >
          <img src={profile} alt="" />
        </div>
      </div>
    </>
  )
}

export default NevbarRight