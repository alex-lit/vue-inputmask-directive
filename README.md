# Vue Inputmask Directive

Vue directive for use [inputmask](https://github.com/RobinHerbots/Inputmask) on
inputs.

## Usage

- Install

  ```sh
  npm i @alexlit/vue-inputmask-directive
  ```

- Use

  ```ts
  import { mask } from '@alexlit/vue-inputmask-directive';

  export default {
    directives: { mask },

    data() {
      return { value: '' };
    },
  };
  ```

  ```html
  <template>
    <input
      v-model="value"
      v-mask="{ mask: '(999) 999-9999' }"
      placeholder="Your phone number"
    />
  </template>
  ```
