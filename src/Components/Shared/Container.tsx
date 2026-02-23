import React from 'react';

const Container = ({children}:{children: React.ReactNode}) => {
    return (
        <div className='max-w-11/12 mx-auto'>
            {children}
        </div>
    );
};

export default Container;