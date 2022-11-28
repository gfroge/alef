import { defineStore } from "pinia";
export const useSnackbarStore = defineStore("snack", {
    state: () => ({
        text: '',
        isVisible: false,
        marginLeft: 0
    }),
    getters: {
    },
    actions: {
        // ! fix
        showSnack(text: string) {
            this.isVisible = true;
            this.text = text;
            setTimeout(() => {
                this.isVisible = false;
            }, 5000);
        },
    }
})