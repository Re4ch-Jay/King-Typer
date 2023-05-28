import { useEffect } from 'react';

const useShiftKey = (callback, key) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.shiftKey && event.key === key) {
                callback();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [callback]);
};

export default useShiftKey;