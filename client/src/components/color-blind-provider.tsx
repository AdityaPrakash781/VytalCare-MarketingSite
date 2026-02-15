import React, { createContext, useContext, useEffect, useState } from "react";

export type ColorBlindMode =
    | "normal"
    | "protanopia"
    | "deuteranopia"
    | "tritanopia"
    | "achromatopsia";

type ColorBlindProviderProps = {
    children: React.ReactNode;
    defaultMode?: ColorBlindMode;
    storageKey?: string;
};

type ColorBlindProviderState = {
    mode: ColorBlindMode;
    setMode: (mode: ColorBlindMode) => void;
};

const initialState: ColorBlindProviderState = {
    mode: "normal",
    setMode: () => null,
};

const ColorBlindProviderContext = createContext<ColorBlindProviderState>(initialState);

export function ColorBlindProvider({
    children,
    defaultMode = "normal",
    storageKey = "vytal-ui-colorblind-mode",
}: ColorBlindProviderProps) {
    const [mode, setMode] = useState<ColorBlindMode>(
        () => (localStorage.getItem(storageKey) as ColorBlindMode) || defaultMode
    );

    useEffect(() => {
        const root = window.document.documentElement;
        // Remove all color blind classes
        root.classList.remove(
            "cb-protanopia",
            "cb-deuteranopia",
            "cb-tritanopia",
            "cb-achromatopsia"
        );

        if (mode !== "normal") {
            root.classList.add(`cb-${mode}`);
        }
    }, [mode]);

    const value = {
        mode,
        setMode: (newMode: ColorBlindMode) => {
            localStorage.setItem(storageKey, newMode);
            setMode(newMode);
        },
    };

    return (
        <ColorBlindProviderContext.Provider value={value}>
            {children}
        </ColorBlindProviderContext.Provider>
    );
}

export const useColorBlind = () => {
    const context = useContext(ColorBlindProviderContext);

    if (context === undefined)
        throw new Error("useColorBlind must be used within a ColorBlindProvider");

    return context;
};
