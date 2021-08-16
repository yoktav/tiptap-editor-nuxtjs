<template>
  <div class="c-editor-inline">
    <TipTapEditorUtilsBubble :editor="editor" />
    <EditorContent :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import fontSize from './Utils/FontSize/FontSize';

export default {
  components: {
    EditorContent,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(this.value, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit, Highlight, Placeholder, fontSize],
      content: this.value,
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML());

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss">
//
// assets folder not included this repo but contains these:
// $color-*
// px-to-rem()
// $g-*
//
@import '~assets/styles/abstracts/index';

.c-editor-inline {
  .tippy-box {
    background-color: $color-white;
    border-radius: px-to-rem(4px);
    box-shadow: 0 px-to-rem(1px) px-to-rem(3px) rgba(0, 0, 0, 0.12);
    color: $color-black;

    > .tippy-arrow {
      // stylelint-disable-next-line selector-max-specificity
      &::before {
        border-top-color: $color-white;
      }
    }
  }
}

// stylelint-disable selector-pseudo-element-no-unknown, max-nesting-depth, selector-max-specificity, selector-no-qualifying-type
.ProseMirror {
  $placeholder-text: 'Write something...';

  $placeholder-type-newline: 'newline';
  $placeholder-type-attop: 'attop';

  $placeholder-type: $placeholder-type-newline; // newline || attop

  @mixin tiptap-placeholder {
    &::before {
      display: block;
      height: 0;
      color: $g-text-muted-color;
      content: $placeholder-text;
      float: left;
      pointer-events: none;
    }
  }

  p {
    $margin: $g-paragraph-margin-top / 4;

    margin-top: $margin;
    margin-bottom: $margin;

    @if ($placeholder-type == $placeholder-type-newline) {
      // Placeholder (at the top)
      &.is-editor-empty {
        &:first-child {
          @include tiptap-placeholder;
        }
      }
    }

    @if ($placeholder-type == $placeholder-type-attop) {
      // Placeholder (on every new line)
      &.is-empty {
        @include tiptap-placeholder;
      }
    }
  }
}
</style>
