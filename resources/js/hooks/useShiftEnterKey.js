import { useEffect } from 'react';

const useShiftEnterKey = (callback) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.shiftKey && event.key === 'Enter') {
                callback();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [callback]);
};

export default useShiftEnterKey;