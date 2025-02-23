import React from 'react';

interface ErrorProps {
    error: string | Error;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    let errorMessage = '';

    if (typeof error === 'string') {
        errorMessage = error;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else {
        errorMessage = 'Wystąpił nieznany błąd.';
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Błąd!</strong>
                    <span className="block sm:inline ml-2">{errorMessage}</span>
                </div>
            </div>

        </>
    );
};

export default Error;