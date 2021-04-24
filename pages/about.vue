<template>
  <div class="about-page">
    <Body>
      <div class="about">
        <div class="container" style="">
          <client-only>
            <article class="prose prose-sm sm:prose lg:prose-lg mx-auto">
              <editor-content :editor="editor" />
            </article>
          </client-only>
        </div>
      </div>
    </Body>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import { defaultExtensions } from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Code from '@tiptap/extension-code'

import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
// import { IndexeddbPersistence } from 'y-indexeddb'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    // A new Y document
    const ydoc = new Y.Doc()
    // Registered with a WebSocket provider

    // eslint-disable-next-line no-unused-vars
    const Provider = new WebsocketProvider(
      'wss://comment.fredliang.cn',
      // 'ws://168.63.219.123:11234',
      'about-comment',
      ydoc
    )

    this.editor = new Editor({
      editable: true,
      // editable: process.env.NODE_ENV !== 'production',
      // content:
      //   '<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>',
      // extensions: defaultExtensions(),
      extensions: [
        // …
        // Register the document with tiptap
        ...defaultExtensions(),
        Highlight,
        Typography,
        Code,
        Collaboration.configure({
          document: ydoc,
        }),
        CollaborationCursor.configure({
          provider: Provider,
          name: 'Cyndi Lauper',
          color: '#f783ac',
        }),
      ],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="less">
.about {
  padding-top: 40px;
}

/* Basic editor styles */
.ProseMirror {
  outline: none;
  > * + * {
    margin-top: 0.75em;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
}

.content {
  padding: 1rem 0 0;

  h3 {
    margin: 1rem 0 0.5rem;
  }

  pre {
    border-radius: 5px;
    color: #333;
  }

  code {
    display: block;
    white-space: pre-wrap;
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
    background-color: #e9ecef;
    color: #495057;
  }
}

.collaboration-cursor__caret {
  position: relative;
  margin-left: -1px;
  margin-right: -1px;
  border-left: 1px solid #0d0d0d;
  border-right: 1px solid #0d0d0d;
  word-break: normal;
  pointer-events: none;
}

/* Render the username above the caret */
.collaboration-cursor__label {
  position: absolute;
  top: -1.4em;
  left: -1px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  user-select: none;
  color: #0d0d0d;
  padding: 0.1rem 0.3rem;
  border-radius: 3px 3px 3px 0;
  white-space: nowrap;
}
</style>
