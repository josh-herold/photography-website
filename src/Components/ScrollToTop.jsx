import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { location } = useLocation();

    useEffect(() => {

    }, [location]);

    return null;
};

export default ScrollToTop;
