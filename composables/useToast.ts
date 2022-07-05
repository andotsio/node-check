import {useToastStore} from "~/composables/useStore";

export const useToast = () => {
    const toastStore = useToastStore()
    const showToast = (message, type = 'success') => {
        if (message) {
            toastStore.value = {
                show: true,
                msg: message,
                type: type,
            };
            const time = type === 'success' ? 2500 : 5000;
            setTimeout(() => {
                toastStore.value.show = false;
            }, time);
        }
    }
    return {
        showToast,
    }
}
