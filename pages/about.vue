<template>
  <div class="about-page">
    <Body>
      <div class="about">
        <div class="container" style="">
          <client-only>
            <article class="prose prose-sm sm:prose lg:prose-lg mx-auto">
              <bubble-menu
                v-if="editor"
                class="bubble-menu"
                :tippy-options="{ duration: 100 }"
                :editor="editor"
              >
                <button
                  :class="{ 'is-active': editor.isActive('bold') }"
                  @click="editor.chain().focus().toggleBold().run()"
                >
                  Bold
                </button>
                <button
                  :class="{ 'is-active': editor.isActive('italic') }"
                  @click="editor.chain().focus().toggleItalic().run()"
                >
                  Italic
                </button>
                <button
                  :class="{ 'is-active': editor.isActive('strike') }"
                  @click="editor.chain().focus().toggleStrike().run()"
                >
                  Strike
                </button>
              </bubble-menu>

              <floating-menu
                v-if="editor"
                class="floating-menu"
                :tippy-options="{ duration: 100 }"
                :editor="editor"
              >
                <button
                  :class="{
                    'is-active': editor.isActive('heading', { level: 1 }),
                  }"
                  @click="
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  "
                >
                  H1
                </button>
                <button
                  :class="{
                    'is-active': editor.isActive('heading', { level: 2 }),
                  }"
                  @click="
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  "
                >
                  H2
                </button>
                <button
                  :class="{ 'is-active': editor.isActive('bulletList') }"
                  @click="editor.chain().focus().toggleBulletList().run()"
                >
                  Bullet List
                </button>
              </floating-menu>
              <editor-content :editor="editor" />
            </article>
          </client-only>
        </div>
      </div>
      <WidgetSpotify />
    </Body>
  </div>
</template>

<script>
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-2'
// import { defaultExtensions } from '@tiptap/starter-kit'
import StarterKit from '@tiptap/starter-kit'
import { Document } from '@tiptap/extension-document'
import { Paragraph } from '@tiptap/extension-paragraph'
import { Text } from '@tiptap/extension-text'
import { Link } from '@tiptap/extension-link'
import { Highlight } from '@tiptap/extension-highlight'
import { Typography } from '@tiptap/extension-typography'
import { Code } from '@tiptap/extension-code'

import { Collaboration } from '@tiptap/extension-collaboration'
import { CollaborationCursor } from '@tiptap/extension-collaboration-cursor'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
// import { IndexeddbPersistence } from 'y-indexeddb'

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
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
      'wss://dyn-doc.fredliang.cn',
      // 'ws://168.63.219.123:11234',
      // 'ws://localhost:11234',
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
        StarterKit,
        Highlight,
        Typography,
        Document,
        Paragraph,
        Text,
        Link,
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
.dark-mode {
  strong {
    color: white;
  }
  .bubble-menu {
    background-color: rgba(255, 255, 255, 0.2);

    button {
      color: #fff;
    }
  }

  .floating-menu {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
  }
}
.about {
  padding-top: 1px;
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

.bubble-menu {
  display: flex;
  background-color: #0d0d0d;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}

.floating-menu {
  display: flex;
  background-color: #0d0d0d10;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}
</style>
