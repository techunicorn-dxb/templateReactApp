import { Toaster } from 'react-hot-toast';

export const TeamsToast = () => {

    return <Toaster
        toastOptions={{
            success: {
                style: {
                    background: '#7375C1',
                    color: 'white'
                },
            },
            error: {
                style: {
                    background: '#7375C1',
                    color: 'white'
                },
                iconTheme: {
                    primary: 'white',
                    secondary: 'black',
                },
            },
        }}
    />
}