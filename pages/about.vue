<template>
  <div class="about-page">
    <div class="about">
      <div class="container" style="">
        <Article :post="post" :comment="true" />
      </div>
    </div>
    <WidgetSpotify />
  </div>
</template>

<script>
// import { Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-2'
// // import { defaultExtensions } from '@tiptap/starter-kit'
// import StarterKit from '@tiptap/starter-kit'
// // import { Document } from '@tiptap/extension-document'
// // import { Paragraph } from '@tiptap/extension-paragraph'
// // import { Text } from '@tiptap/extension-text'
// import { Link } from '@tiptap/extension-link'
// import { Highlight } from '@tiptap/extension-highlight'
// import { Typography } from '@tiptap/extension-typography'
// // import { Code } from '@tiptap/extension-code'

// import { Collaboration } from '@tiptap/extension-collaboration'
// import { CollaborationCursor } from '@tiptap/extension-collaboration-cursor'
// import * as Y from 'yjs'
// import { WebsocketProvider } from 'y-websocket'
import Article from '~/components/basic/Article.vue'
// import { IndexeddbPersistence } from 'y-indexeddb'

export default {
  components: {
    // EditorContent,
    // BubbleMenu,
    // FloatingMenu,
    Article,
  },

  async asyncData({ $content, i18n }) {
    const post = await $content('about.' + i18n.locale).fetch()
    return {
      post,
    }
  },

  data() {
    return {
      editor: null,
    }
  },
}
</script>

<style lang="less">
.dark {
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
