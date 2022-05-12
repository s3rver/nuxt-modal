// import disableScroll from "disable-scroll";
import RegisterModals from "modal/template/RegisterModals";
import Vue from "vue";

const options = <%= JSON.stringify(options) % >

export default ({app, store, $device, isClient}, inject) => {
    store.registerModule("modal", myStore);

    const modal = {
        get(name) {
            return store.state.modal.modals.find(modal => modal.name === name);
        },

        is(name) {
            return this.get(name);
        },

        getLen() {
            return store.state.modal.modals.length;
        },

        visible(
            name,
            {
                data = {},
                title = false,
                callBack = false,
                disabled = false,
                layout = false,
                mobileLayout = false
            }
        ) {
            // disableScroll.on();

            store.commit("modal/visible", {
                name,
                data,
                title,
                callBack,
                disabled,
                layout: layout || options.layout,
                mobileLayout: mobileLayout || options.mobileLayout
            });
        },

        close(name, data) {
            if (this.is(name)) {
                if (this.get(name).callBack && data) {
                    this.get(name).callBack(data);
                }

                /* if (this.getLen() <= 1) {
                     disableScroll.off();
                 }*/

                store.commit("modal/close", name);
            }
        },

        closeAll() {
            store.commit("modal/closeAll");
        }
    };

    app[`$${options.pluginName}`] = modal;
    inject(options.pluginName, modal);

    RegisterModals.computed.options = () => options;

    Vue.component("register-modals", RegisterModals);
};

let zIndex = 0;

const myStore = {
    namespaced: true,

    state: () => ({
        modals: []
    }),

    mutations: {
        visible(state, options) {
            const obj = {
                ...options,
                index: zIndex++,
                visible: true
            };

            const is_exists = state.modals.find(modal => modal.name === obj.name);

            if (is_exists) {
                state.modals = state.modals.map(modal =>
                    modal.name === obj.name ? {...modal, ...obj} : modal
                );
            } else {
                state.modals.push(obj);
            }
        },

        close(state, name) {
            state.modals = state.modals.map(modal =>
                modal.name === name
                    ? {
                        visible: false,
                        name: modal.name,
                        layout: modal.layout,
                        mobileLayout: modal.mobileLayout
                    }
                    : modal
            );
        },

        closeAll(state) {
            state.modals = state.modals.map(modal => ({
                visible: false,
                name: modal.name,
                layout: modal.layout,
                mobileLayout: modal.mobileLayout
            }));
        }
    },

    actions: {},

    getters: {},
};
