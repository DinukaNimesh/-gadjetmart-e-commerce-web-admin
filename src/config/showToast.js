import { ToastContainer, toast } from 'react-toastify';

const showSuccessToast = (message="🦄Success!") => {
        return toast.success(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
}

const showFailedToast = (message="🦄Success!") => {
        return toast.error(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
}

const showWarningToast = (message="🦄Success!") => {
        return toast.warn(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
}

export {
        showSuccessToast,
        showFailedToast,
        showWarningToast
}
