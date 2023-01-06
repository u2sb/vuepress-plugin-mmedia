// https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/9da8e75194ae1bab88b8eb554fdb4aeea4d5f615/packages/components/src/client/composables/size.ts

import { useEventListener } from "@vueuse/core";
import { computed, onMounted, isRef, ref, unref, watch } from "vue";
import type { MaybeRef } from "@vueuse/core";
import type { Ref } from "vue";

const getValue = (value: string | number): string =>
  typeof value === "string" ? value : `${value}px`;

export interface SizeOptions {
  width: string | number | undefined;
  height: string | number | undefined;
  ratio: string | number | undefined;
}

export interface SizeInfo<E extends HTMLElement> {
  el: Ref<E | undefined>;
  width: Ref<string>;
  height: Ref<string>;
}

export const useSize = <E extends HTMLElement>(
  options: SizeOptions,
  extraHeight: MaybeRef<number> = 0
): SizeInfo<E> => {
  const el = ref<E>();
  const width = computed(() => getValue(unref(options.width) || "100%"));
  const height = ref("auto");

  const getRadio = (radio: number | string | undefined): number => {
    if (typeof radio === "string") {
      const [width, height] = radio.split(":");
      const parsedRadio = Number(width) / Number(height);

      if (!Number.isNaN(parsedRadio)) return parsedRadio;
    }

    return typeof radio === "number" ? radio : 16 / 9;
  };

  const getHeight = (width: number): string => {
    const height = unref(options.height);
    const ratio = getRadio(unref(options.ratio));

    return height
      ? getValue(height)
      : `${Number(width) / ratio + unref(extraHeight)}px`;
  };

  const updateHeight = (): void => {
    if (el.value) height.value = getHeight(el.value.clientWidth);
  };

  onMounted(() => {
    updateHeight();
    if (isRef(extraHeight)) watch(extraHeight, () => updateHeight());
    useEventListener("orientationchange", () => updateHeight());
    useEventListener("resize", () => updateHeight());
  });

  return {
    el,
    width,
    height,
  };
};
