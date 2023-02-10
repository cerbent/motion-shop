import React, {useState} from 'react';
import {BsQuestionSquare, BsSearch} from "react-icons/bs";
import {SlBasket} from "react-icons/sl";
import {MdOutlinePersonSearch} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";


const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        // <header id='header'>
        //     <div className='container'>
        //         <div className='header'>
        //             <div className='header--block'>
        //                 <h1>MOTION SHOP</h1>
        //             </div>
        //             <div className='header--input'>
        //                 <input type="search" placeholder="я ищу..."/>
        //                 <div className='header--input__icon'>
        //                     <BsSearch/>
        //                 </div>
        //             </div>
        //             <div className='header--icon'>
        //                 <div className='header--icon__img'>
        //                     <div className='header--icon__img--first'>
        //                         <BsQuestionSquare color='white'/>
        //                     </div>
        //                     <NavLink to={''}>FAQ</NavLink>
        //                 </div>
        //                 <div className='header--icon__img'>
        //                     <div className='header--icon__img--first'>
        //                         <MdOutlinePersonSearch color='white'/>
        //                     </div>
        //                     <NavLink to={''}>О нас</NavLink>
        //                 </div>
        //                 <div className='header--icon__img'>
        //                     <div className='header--icon__img--first'>
        //                         <SlBasket color='white'/>
        //                     </div>
        //                     <NavLink to={''}>Корзина</NavLink>
        //                 </div>
        //
        //             </div>
        //             <div onClick={() => setNav(!nav)} className='header--menu'>
        //                 {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/> }
        //             </div>
        //             <div className='header--kor'>
        //                 <SlBasket color={'rgba(209, 24, 168, 1)'}/>
        //             </div>
        //
        //         </div>
        //     </div>
        //
        // </header>
        <header id="header">
            <div className="container">
                <div className="header">
                    <h1>MOTION SHOP</h1>
                    <div className="header--input">
                        <input type="text" placeholder="я ищу..." color='white'/>
                        <BsSearch className="header--input__icon"/>
                    </div>
                    <div className={nav ? 'header--menu' : 'header--icon'} onClick={() => setNav(false)}>
                        <div className="header--icon__img">
                            <BsQuestionSquare color='white' className='header--icon__img--bg'/>
                            <NavLink to={''}>FAQ</NavLink>
                        </div>
                        <div className="header--icon__img">
                            <MdOutlinePersonSearch color='white' className='header--icon__img--bg'/>
                            <NavLink to={''}>О нас</NavLink>
                        </div>
                        <div className="header--icon__img">
                            <SlBasket color='white' className='header--icon__img--bg'/>
                            <NavLink to={''}>Корзина</NavLink>
                        </div>
                    </div>
                    <div onClick={() => setNav(!nav)} className='header--menu'>
                        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
                    </div>
                    <div className="header--kor">
                        <SlBasket color={'rgba(209, 24, 168, 1)'}/>
                    </div>
                </div>
            </div>
        </header>

    );
};
// let menuBtn = document.querySelector('.img');
// let menu = document.querySelector('.icon');
// menuBtn.addEventListener('click', function(){
//     menu.classList.toggle('active');
// })

export default Header;