<template>
    <div>
        <transition mode="out-in" name="modal-fade">
            <div
                v-if="is_show"
                :style="{ 'z-index': zIndex }"
                class="fixed inset-0 m-auto h-screen w-screen bg-[#00000044]"
                @click="close"
            ></div>
        </transition>

        <transition mode="out-in" name="modal-slide">
            <div
                v-if="is_show"
                :style="{
                  'z-index': zIndex,
                }"
                class="bg-white fixed inset-x-0 bottom-0 mx-auto p-5 py-3 max-h-[96vh] rounded-t-3xl overflow-x-hidden"
            >
                <div
                    v-if="modal.title"
                    class="flex justify-between items-center border-b border-gray-200 pb-2 mb-1"
                >
                    <h2 class="text-xl">{{ modal.title }}</h2>

                    <svg
                        v-if="!modal.disabled"
                        class="w-5 h-5 cursor-pointer"
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
                    class="h-1.5 mx-auto w-24 bg-gray-200 rounded-full mb-3"
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
