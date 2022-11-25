import { defineStore } from "pinia";
export const useSnackbarStore = defineStore("snack",{
    state: () => ({
        isVisible: false,
        text: '',
        marginLeft: 0
    }),
    getters:{
    },
    actions: {
        showSnack(text:string) {
            this.isVisible = true;
            this.text = text;
            setTimeout(() => {
                this.isVisible = false;
            }, 15000);
        },
    }
})