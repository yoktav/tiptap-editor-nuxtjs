// import { Mark } from 'tiptap';
// import { updateMark } from 'tiptap-commands';

// export default class fontSize extends Mark {
//   get name() {
//     return 'font_family';
//   }

//   get schema() {
//     return {
//       attrs: {
//         font_family: {
//           default: '',
//         },
//       },
//       content: 'inline*',
//       group: 'block',
//       draggable: false,
//       parseDOM: [
//         {
//           style: 'font-family',
//           getAttrs: mark => ({ font_family: mark }),
//         },
//       ],
//       setFontSize: mark => [
//         'span',
//         { style: mark.attrs.font_family ? `font-family: ${mark.attrs.font_family}` : '' },
//         0,
//       ],
//     };
//   }

//   commands({ type }) {
//     return attrs => updateMark(type, attrs);
//   }
// }

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

// import { Extension, mergeAttributes } from '@tiptap/core';

// const fontSize = Extension.create({
//   name: 'fontSize',

//   defaultOptions: {
//     HTMLAttributes: {},
//   },

//   parseHTML() {
//     return [
//       {
//         tag: 'span',
//       },
//     ];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return ['strong', mergeAttributes(HTMLAttributes), 0];
//   },

//   addCommands() {
//     return {
//       setFontSize: () => ({ commands }) => {
//         // console.log(commands.updateAttributes('', { textAlign: 'left' }));
//         // console.log(commands.updateAttributes(null, {}));
//         // commands.setNode('heading');
//         console.log(NodeType);
//         // return commands.setMark('fontSize');
//         return alert('a');
//       },
//     };
//   },
// });

// export default fontSize;

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

// import { Node, mergeAttributes } from '@tiptap/core';
// import { VueNodeViewRenderer } from '@tiptap/vue-2';
// import Component from './Component.vue';

// export default Node.create({
//   name: 'vueComponent',

//   group: 'block',

//   content: 'inline*',

//   parseHTML() {
//     return [
//       {
//         tag: 'vue-component',
//       },
//     ];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return ['vue-component', mergeAttributes(HTMLAttributes), 0];
//   },

//   addNodeView() {
//     return VueNodeViewRenderer(Component);
//   },
// });
