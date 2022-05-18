// import disableScroll from "disable-scroll";
import RegisterModals from "@s3rver/nuxt-modal/template/RegisterModals";
import Vue from "vue";

const _options = <%= JSON.stringify(options) %>

export default ({ app, store, $device, isClient }, inject) => {
    try {
        store.registerModule("modal", myStore);
    } catch (e) {
        throw "modal module: please make store -> https://nuxtjs.org/guide/vuex-store";
    }

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
            options = {}
        ) {
            // disableScroll.on();
            options = {
                data: {},
                title: false,
                callBack: false,
                disabled: false,
                layout: _options.layout,
                mobileLayout: _options.mobileLayout,
                ...options
            };

            store.commit("modal/visible", {
                name,
                ...options
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

    app[`$${_options.pluginName}`] = modal;
    inject(_options.pluginName, modal);

    RegisterModals.computed.options = () => _options;

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
                    modal.name === obj.name ? { ...modal, ...obj } : modal
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

    getters: {}
};
