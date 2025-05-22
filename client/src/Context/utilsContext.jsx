import React, { createContext, useContext, useState, useEffect } from "react";

const UtilsContext = createContext(null);

export const UtilsProvider = (props) => {
    const [lang, setLang] = useState('swedish');

    useEffect(() => {
        const storedLang = localStorage.getItem('lang');
        setLang(storedLang)
    }, []);

    return (
        <UtilsContext.Provider value={{ lang, setLang }}>
            {props.children}
        </UtilsContext.Provider>
    );
};

export function useUtils() {
    const context = useContext(UtilsContext);
    if (!context) {
        throw new Error("useUtils must be used within a UtilsContext");
    }
    return context;
}
