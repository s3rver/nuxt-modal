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
import _default from "@s3rver/nuxt-modal/template/layouts/default";
import _defaultMobile from "@s3rver/nuxt-modal/template/layouts/defaultMobile";

export default {
    components: {
        default: _default,
        defaultMobile: _defaultMobile
    },

    data() {
        return {
            prefix: "",
            modals: {}
        };
    },

    computed: {},

    methods: {
        resizeWindow({ target }) {
            this.prefixChanger(target.innerWidth);
        },

        getLayout(modal) {
            if (this.options.mobileSize > window.innerWidth) {
                return modal?.mobileLayout;
            } else {
                return modal?.layout;
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

            try {
                let context = require.context("./../../../../modals", true, /\.vue/);

                context.keys().map(file => {
                    let name = file.replace("./", "").replace("/", "-").replace(".vue", "");
                    modals.push(name);
                });
            } catch (e) {
                //
            }

            this.modals = modals;
        }
    },

    mounted() {
        this.setModalsName();

        this.prefixChanger(window.innerWidth);

        window.addEventListener("resize", this.resizeWindow);
    },

    destroyed() {
        window.removeEventListener("resize", this.resizeWindow);
    }
};
</script>
