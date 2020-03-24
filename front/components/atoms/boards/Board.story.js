import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import Board from "./Board";


storiesOf('Board', module).add('default', () => ({
  components: { Board },
  template: `<Board/>`
}))
