<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <router-link target="_blank" to="https://vuejs.org/">official documentation</router-link>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <router-link to="https://vitejs.dev/guide/features.html" target="_blank">Vite</router-link>. The recommended IDE
    setup is <router-link to="https://code.visualstudio.com/" target="_blank">VSCode</router-link> +
    <router-link to="https://github.com/johnsoncodehk/volar" target="_blank">Volar</router-link>. If you need to test
    your components and web pages, check out
    <router-link to="https://www.cypress.io/" target="_blank">Cypress</router-link> and
    <router-link to="https://docs.cypress.io/guides/component-testing/introduction" target="_blank"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <router-link target="_blank" to="https://pinia.vuejs.org/">Pinia</router-link>,
    <router-link target="_blank" to="https://router.vuejs.org/">Vue Router</router-link>,
    <router-link target="_blank" to="https://test-utils.vuejs.org/">Vue Test Utils</router-link>, and
    <router-link target="_blank" to="https://github.com/vuejs/devtools">Vue Dev Tools</router-link>. If you need more
    resources, we suggest paying
    <router-link target="_blank" to="https://github.com/vuejs/awesome-vue">Awesome Vue</router-link>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <router-link target="_blank" to="https://chat.vuejs.org">Vue Land</router-link>, our official Discord server, or
    <router-link target="_blank" to="https://stackoverflow.com/questions/tagged/vue.js">StackOverflow</router-link>.
    You should also subscribe to
    <router-link target="_blank" to="https://news.vuejs.org">our mailing list</router-link> and follow the official
    <router-link target="_blank" to="https://twitter.com/vuejs">@vuejs</router-link>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <router-link target="_blank" to="https://vuejs.org/sponsor/">becoming a sponsor</router-link>.
  </WelcomeItem>
</template>
