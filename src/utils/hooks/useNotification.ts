import { toast } from "react-toastify";

export const useNotification = () => {
    const notify = (message: string, type: "error" | "success" | "default") => {
        switch (type) {
            case "error":
                toast.error(message);
                break;

            case "success":
                toast.success(message);
                break;
            
            default:
                toast(message);
        }
    };

    return { notify };
};