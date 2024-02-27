import React from 'react';

interface CardProps {
    label: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ label, children }) => {
    return (
        <section
            style={{
                backgroundColor: label === 'one' ? 'white' : 'lightgray',
                boxShadow: label === 'one' ? 'none' : 'lightgray',
                height: "300px",
                paddingLeft: label === 'one' ? '0' : '',
            }}
            className="bg-gray rounded-lg shadow-md p-8 card-four"
        >
            <div className="card">
                {children}
            </div>
        </section>
    );
};

export default Card;
