import React from 'react';
import family from "../../asstests/img/image 67.png"
import git from "../../asstests/img/t-shorts.png"
const Hero = () => {
    return (
       // <div id='hero'>
       //     <div className='container'>
       //         <div className='hero'>
       //             <div className='hero--block'>
       //                 <img src={family} alt=""/>
       //             </div>
       //             <div className='hero--family'>
       //                     <h1>ОДЕЖДА ДЛЯ ВСЕЙ СЕМЬИ!</h1>
       //                 <div className='hero--family__text'>
       //                     <div className='hero--family__text--span'>
       //                         <div></div>
       //                         <span>Для женщин</span>
       //                     </div>
       //                     <div className='hero--family__text--span'>
       //                         <div></div>
       //                         <span>Для женщин</span>
       //                     </div>
       //                     <div className='hero--family__text--span'>
       //                         <div></div>
       //                         <span>Для женщин</span>
       //                     </div>
       //                 </div>
       //             </div>
       //         </div>
       //     </div>
       // </div>
        <div id='hero'>
            <div className='container'>
                <div className='hero'>
                    <img src={family} alt=""/>
                    <div className='hero--family'>
                        <h1>ОДЕЖДА ДЛЯ ВСЕЙ СЕМЬИ!</h1>
                        <div className='hero--family__text'>
                            <div className='hero--family__text--span'>
                                <div></div>
                                <span>Для женщин</span>
                            </div>
                            <div className='hero--family__text--span'>
                                <div></div>
                                <span>Для мужчин</span>
                            </div>
                            <div className='hero--family__text--span'>
                                <div></div>
                                <span>Для детей</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;