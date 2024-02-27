import React from 'react';


type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
    return (
        <section className="header flex justify-between items-center p-4">
            <div >
                <h6 style={{color: "#3D5CFF"}}>Jay Winebrenner.</h6>
            </div>
            <div className="circle-container">
                <div className="circle">
                    <div className="dot"></div>
                </div>
            </div>
        </section>
    );
};

export default Header;
