<template>
    <div>
        <template v-for="name in modals">
            <component :is="getLayout($modal.get(name))" v-if="$modal.is(name)" :name="name">
                <component :is="`${prefix}-${name}`" :data="$modal.get(name).data" :name="name" />
            </component>
        </template>
    </div>
</template>

<script>
import _default from "modal/template/layouts/default";
import _defaultMobile from "modal/template/layouts/defaultMobile";

export default {
    components: {
        default: _default,
        defaultMobile: _defaultMobile,
    },

    data() {
        return {
            prefix: "",
            modals: {},
        };
    },

    computed: {},

    methods: {
        resizeWindow({ target }) {
            this.prefixChanger(target.innerWidth);
        },

        getLayout(modal) {
            if (this.options.mobileSize > window.innerWidth) {
                return modal?.mobileLayout || this.options.mobileLayout;
            } else {
                return modal?.layout || this.options.layout;
            }
        },

        prefixChanger(w) {
            if (!this.options.responsive && this.options.mobileSize > w) {
                this.prefix = "modals-mobile";
            } else {
                this.prefix = "modals";
            }
        },

        setModalsName() {
            let modals = [];
            let context = require.context("./../../../modals", true, /\.vue/);

            context.keys().map(file => {
                let name = file.replace("./", "").replace("/", "-").replace(".vue", "");
                modals.push(name);
            });

            this.modals = modals;
        },
    },

    mounted() {
        this.setModalsName();

        this.prefixChanger(window.innerWidth);

        window.addEventListener("resize", this.resizeWindow);
    },

    destroyed() {
        window.removeEventListener("resize", this.resizeWindow);
    },
};
</script>