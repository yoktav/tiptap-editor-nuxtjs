<template>
  <BubbleMenu v-if="editor" :editor="editor" :class="CLASSES.ELEMENT">
    {{ /* eslint-disable prettier/prettier */ }}
     <button :class="[CLASSES.BUTTON, editor.isActive('bold') ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().setFontSize().run()">
      asdasd
    </button>

    <button :class="[CLASSES.BUTTON, editor.isActive('bold') ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().toggleBold().run()">
      <svg-icon name="IconBold" title="Kalın" />
    </button>

    <button :class="[CLASSES.BUTTON, editor.isActive('italic') ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().toggleItalic().run()">
      <svg-icon name="IconItalic" title="İtalik" />
    </button>

    <button :class="[CLASSES.BUTTON, editor.isActive('strike') ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().toggleStrike().run()">
      <svg-icon name="IconUnderline" title="Üstü Çizili" />
    </button>

    <button :class="[CLASSES.BUTTON, editor.isActive('highlight', { color: '#ff9910' }) ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().toggleHighlight({ color: '#ff9910' }).run()">
      <svg-icon name="IconHighlight" title="Vurgulu" />
    </button>

    <button :class="[CLASSES.BUTTON, editor.isActive({ textAlign: 'left' }) ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().setTextAlign('left').run()">
      <svg-icon name="IconAlignLeft" title="Sola Yaslı" />
    </button>

    <button :class="[CLASSES.BUTTON, editor.isActive({ textAlign: 'center' }) ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().setTextAlign('center').run()">
      <svg-icon name="IconAlignCenter" title="Ortalı" />
    </button>

    <button :class="[CLASSES.BUTTON, editor.isActive({ textAlign: 'right' }) ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().setTextAlign('right').run()">
      <svg-icon name="IconAlignRight" title="Sağa Yaslı" />
    </button>

    <button :class="[CLASSES.BUTTON, editor.isActive({ textAlign: 'justify' }) ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().setTextAlign('justify').run()">
      <svg-icon name="IconAlignJustify" title="Sola ve Sağa Yaslı" />
    </button>

    <button :class="[CLASSES.BUTTON, editor.isActive('blockquote') ? CLASSES.IS_ACTIVE : null]" @click="editor.chain().focus().toggleBlockquote().run()">
      <svg-icon name="IconQuote" title="Blok Alıntı" />
    </button>

    <button :class="[CLASSES.BUTTON]"  @click="editor.chain().focus().setHorizontalRule().run()">
      <svg-icon name="IconFormatSeperator" title="Ayırıcı" />
    </button>

    <button :class="[CLASSES.BUTTON]" @click="editor.chain().focus().undo().run()">
      <svg-icon name="IconFormatUndo" title="Geri al" />
    </button>

    <button :class="[CLASSES.BUTTON]" @click="editor.chain().focus().redo().run()">
      <svg-icon name="IconFormatRedo" title="Yinele" />
    </button>

    <button :class="[CLASSES.BUTTON]" @click="editor.chain().focus().unsetAllMarks().run()">
      <svg-icon name="IconResetFormat" title="Özelleştirmeyi Kaldır" />
    </button>
  </BubbleMenu>
</template>

<script>
import { BubbleMenu } from '@tiptap/vue-2';

export default {
  components: {
    BubbleMenu,
  },

  props: {
    editor: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      CLASSES: {
        ELEMENT: 'c-editor-inline-bubble',
        BUTTON: 'c-editor-inline-bubble__button',
        IS_ACTIVE: 'is-active',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import './Bubble';
</style>
