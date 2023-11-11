import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'
import useAuth from '../Customhooks/useAuth';


function Private({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

  

    if (loading) {
       return <div className="flex items-center justify-center w-full h-[60vh]">
            <Oval
                height={80}
                width={80}
                color="#ff3811"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#adadad"
                strokeWidth={5}
                strokeWidthSecondary={4}

            />

        </div>
    }


    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/Login' />


}

export default Private