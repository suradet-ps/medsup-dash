<!-- src/components/common/BaseButton.vue -->
<script setup lang="ts">
type Props = {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
};

withDefaults(defineProps<Props>(), {
  variant: 'primary',
});

const variantClasses = {
  primary:
        'bg-mistral-black text-white hover:bg-mistral-orange shadow-golden-sm hover:shadow-golden',
  secondary:
        'bg-cream text-mistral-black border border-block-gold hover:bg-sunshine-300 hover:border-sunshine-700',
  danger:
        'bg-mistral-orange text-white hover:bg-mistral-flame shadow-golden-sm',
  ghost:
        'bg-transparent text-mistral-black/60 hover:bg-[oklab(0_0_0/0.06)] hover:text-mistral-black',
};
</script>

<template>
  <button
    class="inline-flex items-center justify-center px-3 py-3 rounded-none font-normal tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mistral-orange disabled:opacity-50 disabled:cursor-not-allowed uppercase text-sm"
    :class="variantClasses[variant]"
  >
    <slot />
  </button>
</template>
