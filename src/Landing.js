import React from 'react'
import Button from './Components/Button'
import Icon from './Components/Icon'

const Landing = () => {
    return (
        <>
            <div className='contbody'>
                <div className='topnav'>
                    <div className='inernav'>
                        <div className='imgcont'>
                            <img src={require('./logoww.png')} alt="" />
                        </div>
                        <div className='butcont'>
                            <b>OUR PROJECT</b>
                            <b>SCHEDULE AN INSPECTION</b>
                            <div className='drop'>
                                <b>ABOUT US</b>
                                <div className='down'>
                                    <p>Our WEY</p>
                                    <p> wey TV</p>
                                    <p>Blog</p>
                                    <p>Contact Us</p>
                                </div>
                            </div>
                            <button>My Landwey <i className='fa fa-user'></i> </button>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className='inercont'>
                        <div className='textcont'>
                            <h1>Re-inventing the Present,<br /> Creating the Future.</h1>
                            <p>We make real estate investments accessible to everyone in a way that is simple,secure and profitable. </p>
                            <button>Get Started</button>
                        </div>
                        <div className='imdiv'>
                            <div className='backimg'>
                                <div className='baimg'>
                                    <Button className="img myclas" myimg={require('./Screenshot 2023-05-18 100320.png')} />
                                </div>
                                <div className='baimg'>
                                    <Button className="img myclas" myimg={require('./Screenshot 2023-05-18 100900.png')} />
                                </div>
                                <div className='baimg'>
                                    <Button className="img myclas" myimg={require('./Screenshot 2023-05-18 101015.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>.LandWey, a member of Oxygen Holdings</p>
            </div>
            <button className='what'>
                <i className='fa fa-whatsapp'></i>Quick Response
            </button>
            <div className='icondiv'>
                <div className='fai'>
                    <Icon icon="fa fa-facebook" />
                </div>
                <div className='fai'>
                    <Icon icon="fa fa-twitter" />
                </div>
                <div className='fai'>
                    <Icon icon="fa fa-instagram" />
                </div>
                <div className='fai'>
                    <Icon icon="fa fa-youtube" />
                </div>
            </div>
        </>
    )
}

export default Landing