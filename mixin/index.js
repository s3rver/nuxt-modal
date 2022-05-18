export default {
    props: {
        name: {
            required: true
        }
    },

    data() {
        return {
            is_show: null
        };
    },

    computed: {
        modal() {
            return this.$modal.get(this.name);
        },

        zIndex() {
            return 10001 + this.$modal.get(this.name).index;
        }
    },

    watch: {
        modal: {
            handler(v) {
                if (v.visible) {
                    setTimeout(() => {
                        this.is_show = true;
                    });
                } else {
                    this.is_show = false;
                }
            },

            deep: true, immediate: true
        }
    },

    methods: {
        close() {
            if (!this.modal.disabled) {
                this.$modal.close(this.name);
            }
        }
    }
};
