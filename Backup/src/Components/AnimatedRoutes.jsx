import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Blog from '../pages/Blog';
import BerlinPage from '../pages/BerlinPage';
import TanzaniaPage from '../pages/TanzaniaPage';
import AboutPage from '../pages/AboutPage';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <HomePage />
                        </motion.div>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Blog />
                        </motion.div>
                    }
                />
                <Route
                    path="/berlin"
                    element={
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <BerlinPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/tanzania"
                    element={
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <TanzaniaPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <AboutPage />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
