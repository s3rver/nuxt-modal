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
                class="fixed box-modal inset-x-0 bottom-0 mx-auto p-5 py-3 rounded-t-3xl overflow-x-hidden"
            >
                <div class="h-1.5 mx-auto w-24 bg-gray-400 rounded-full mb-3"></div>

                <slot />
            </div>
        </transition>
    </div>
</template>

<script>
import mixin from "@/modules/modal/mixin";

export default {
    mixins: [mixin],
};
</script>

<style scoped>
.box-modal {
    background: linear-gradient(180deg, rgba(62, 61, 83, 1) 0%, rgba(68, 66, 89, 1) 100%);
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
