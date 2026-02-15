import React from "react";

export const ColorBlindFilters = () => {
    return (
        <svg
            className="fixed inset-0 pointer-events-none z-0 h-0 w-0"
            aria-hidden="true"
        >
            <defs>
                {/* Protanopia (Red-Blind) Simulation */}
                <filter id="protanopia">
                    <feColorMatrix
                        type="matrix"
                        values="0.567 0.433 0     0 0
                                0.558 0.442 0     0 0
                                0     0.242 0.758 0 0
                                0     0     0     1 0"
                    />
                </filter>

                {/* Deuteranopia (Green-Blind) Simulation */}
                <filter id="deuteranopia">
                    <feColorMatrix
                        type="matrix"
                        values="0.625 0.375 0     0 0
                                0.7   0.3   0     0 0
                                0     0.3   0.7   0 0
                                0     0     0     1 0"
                    />
                </filter>

                {/* Tritanopia (Blue-Blind) Simulation */}
                <filter id="tritanopia">
                    <feColorMatrix
                        type="matrix"
                        values="0.95  0.05  0     0 0
                                0     0.433 0.567 0 0
                                0     0.475 0.525 0 0
                                0     0     0     1 0"
                    />
                </filter>

                {/* Achromatopsia (Grayscale) */}
                <filter id="achromatopsia">
                    <feColorMatrix
                        type="matrix"
                        values="0.299 0.587 0.114 0 0
                                0.299 0.587 0.114 0 0
                                0.299 0.587 0.114 0 0
                                0     0     0     1 0"
                    />
                </filter>
            </defs>
        </svg>
    );
};
