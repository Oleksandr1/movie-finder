import { useWindowSize } from '@vueuse/core';

export const useScreen = () => {
  const { width } = useWindowSize();
  const isMobile = ref(false);
  width.value < 640 ? (isMobile.value = true) : (isMobile.value = false);
  watch(width, () => {
    width.value < 640 ? (isMobile.value = true) : (isMobile.value = false);
  });

  return { isMobile };
};
