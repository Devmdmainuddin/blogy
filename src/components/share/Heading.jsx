import React from 'react';
import Container from './Container';


const Heading = ({className,middle,text}) => {
    
    return (
        <div>
            
            <Container>
                <div className={` flex  ${middle}`}>
                    <h2 className={` relative py-4  text-4xl font-light font-K2D before:absolute before:-bottom-2.5 inline-block before:w-1/2 before:h-[4px] before:bg-red-500 after:absolute after:-bottom-4 after:left-[92px]   after:bg-red-500 after:w-4 after:h-4 after:rounded-full after:content-[''] capitalize after:animate-leftToRight ${className}`}>{text}</h2>
                </div>
            </Container>

        </div>
    );
};

export default Heading;