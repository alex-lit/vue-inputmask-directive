// eslint-disable-next-line import/no-extraneous-dependencies
import Inputmask from 'inputmask';
import type { DirectiveOptions } from 'vue';

/**
 * Prohibits Cyrillic input
 *
 * Fix for FireFox, because it allows you to enter Cyrillic in both mask and numeric
 * inputs
 *
 * @param event
 */
function denyCyrilic(event: KeyboardEvent) {
  if (/[А-яё]+/gi.test(event.key)) {
    event.preventDefault();
  }
}

/**
 * Alias of two-factor authentication code
 */
const twoFA: Inputmask.Options = {
  autoUnmask: true,
  clearMaskOnLostFocus: false,
  greedy: true,
  insertMode: false,
  insertModeVisual: false,
  mask: '999999',
  placeholder: '●',
  onKeyDown(event: KeyboardEvent) {
    denyCyrilic(event);
  },
};

Inputmask.extendAliases({
  '2fa-code': twoFA,
});

/**
 * Directive
 *
 * @see [inputmask](https://github.com/RobinHerbots/Inputmask)
 */
export const mask: DirectiveOptions = {
  bind(element, binding): void {
    const input =
      element.tagName === 'INPUT'
        ? element
        : element.querySelectorAll('INPUT')[0];

    if (input) {
      new Inputmask(binding.value).mask(input as HTMLElement);
    } else {
      console.warn('[directive:mask]: no input found');
    }
  },
};
