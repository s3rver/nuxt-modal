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
                  height: 'max-content',
                }"
                class="flex flex-col fixed bg-white inset-0 m-auto rounded-xl max-h-[96vh] overflow-y-auto w-max"
            >
                <div
                    v-if="modal.title"
                    class="flex justify-between gap-x-5 items-center border-b border-gray-300 p-2"
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

                <div class="p-2">
                    <slot />
                </div>
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
    transition: all 0.2s ease-in-out;
}

.modal-slide-enter,
.modal-slide-leave-to {
    transform: translateY(30px) scale(0.93);
    opacity: 0;
}
</style>
