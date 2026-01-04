"use client";
import React, { useState } from 'react';
import NavbarUI from '@/components/navbar/Navbar';
import GlassSurface from '@/components/ContainerEffect/ContainerEffectGlassSurface';
import PDFViewer from '@/app/resumeSection/page';
interface Props {
}

const Header = (props: Props) => {
    const [showPDF, setShowPDF] = useState(false);
    return (
        <GlassSurface width={1200} borderWidth={0.2} brightness={60} opacity={0.23} backgroundOpacity={0.43} saturation={3} className="my-custom-glass-header">
            <header className="w-full">
                <div className="max-w-7xl mx-auto flex items-center justify-around px-4 py-3">

                    {/* Navbar */}
                    <NavbarUI />

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setShowPDF(!showPDF)}
                            className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Resume
                        </button>
                        {showPDF && (
                            <div className="mt-4">
                                <PDFViewer pdfFile="@/public/pdf/Resume.pdf" />
                            </div>
                        )}
                        <a
                            href="mailto:cleiton3001@icloud.com"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Contacto
                        </a>
                    </div>
                </div>
            </header>
        </GlassSurface>
    );
};

export default Header;
