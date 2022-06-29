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
                    height: 'max-content',
                }"
                class="___s3r_m_box-modal"
            >
                <div v-if="modal.title" class="___s3r_m_header">
                    <h2 class="___s3r_m_title">{{ modal.title }}</h2>

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

                <div class="___s3r_m_content">
                    <slot />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import mixin from "@s3rver/nuxt-modal/mixin";

export default {
    mixins: [mixin],
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

.___s3r_m_box-modal {
    display: flex;
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #ffffff;
    flex-direction: column;
    width: max-content;
    border-radius: 0.75rem;
}

.___s3r_m_header {
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-color: #d1d5db;
    column-gap: 1.25rem;
}

.___s3r_m_header .___s3r_m_title {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

.___s3r_m_header .ic-close {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
}

.___s3r_m_content {
    padding: 0.5rem;
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
    transition: all 0.2s ease-in-out;
}

.modal-slide-enter,
.modal-slide-leave-to {
    transform: translateY(30px) scale(0.93);
    opacity: 0;
}
</style>
