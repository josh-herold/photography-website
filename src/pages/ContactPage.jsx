import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);  // Sicherstellen, dass beim Verlassen die Seite nicht nach oben scrollt
    }, [pathname]);


    return (
        <>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: "easeInOut" } }}
                transition={{ duration: 0.8, ease: "easeInOut" }}


            >
                <div className="contactpage-parent">
                    <h1 className='contactpage-header'>Contact me</h1>

                    <div className="contactpage-container">

                        <div className="contactpage-text">

                            <p>

                                Janosch Herold<br />Yorckstrasse 59<br />10965 Berlin<br />
                                Germany</p>

                            <p>www.janoschherold.de<br />
                                mailer@janoschherold.de<br />
                            </p>



                        </div>
                        <div className="contactpage-image">
                            <img src="/photography/images/LowRes/world.jpg" alt="Laptop" />
                        </div>

                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ContactPage;
