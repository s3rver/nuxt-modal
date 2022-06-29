<template>
    <div>
        <transition mode="out-in" name="modal-fade">
            <div
                v-if="is_show"
                :style="{ 'z-index': zIndex }"
                class="dark-lay"
                @click="close"
            ></div>
        </transition>

        <transition mode="out-in" name="modal-slide">
            <div
                v-if="is_show"
                :style="{
          'z-index': zIndex,
        }"
                class="modal-box"
            >
                <div
                    v-if="modal.title"
                    class="header"
                >
                    <h2 class="title">{{ modal.title }}</h2>

                    <svg
                        v-if="!modal.disabled"
                        class="ic-close"
                        viewBox="0 0 50 45"
                        xmlns="http://www.w3.org/2000/svg"
                        @click="close"
                    >
                        <path
                            d="M9.15625 6.3125L6.3125 9.15625L22.15625 25L6.21875 40.96875L9.03125 43.78125L25 27.84375L40.9375 43.78125L43.78125 40.9375L27.84375 25L43.6875 9.15625L40.84375 6.3125L25 22.15625Z"
                            fill="#ee0000"
                        />
                    </svg>
                </div>

                <div
                    v-else
                    class="content"
                ></div>

                <slot />
            </div>
        </transition>
    </div>
</template>

<script>
import mixin from "@s3rver/nuxt-modal/mixin";

export default {
    mixins: [mixin]
};
</script>

<style scoped>
.dark-lay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #00000044;
}

.modal-box {
    overflow-x: hidden;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: #ffffff;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
}

.header {
    display: flex;
    padding-bottom: 0.5rem;
    margin-bottom: 0.25rem;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-color: #E5E7EB;
}

.header .title {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

.ic-close {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
}

.content {
    margin-bottom: 0.75rem;
    background-color: #E5E7EB;
    width: 6rem;
    height: 0.375rem;
    border-radius: 9999px;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.2s;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
    transition: all 0.25s ease-in-out;
}

.modal-slide-enter,
.modal-slide-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>
