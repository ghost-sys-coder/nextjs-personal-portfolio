import toast, { ToastPosition } from "react-hot-toast";


interface optionsProps {
    position: ToastPosition | undefined;
    duration: number;
    style: {
        backgroundColor: string;
        borderRadius: string;
        color: string
    }
}

const options: optionsProps = {
  position: "top-center",
  duration: 5000,
  style: {
    backgroundColor: "red",
    borderRadius: "10px",
    color: "#fff",
  },
};

export const formValidation = async (values: {
    fullname: string;
    email: string;
}) => {
    if (!values.fullname) {
        return toast.error('Name field missing', options);
    }

    if (!values.email) {
        return toast.error('Email field missing', options);
    }
};
