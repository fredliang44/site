<template>
  <div class="container py-4 mx-auto">
    <div
      v-for="(productListItem, productListItemIndex) in productCategory"
      :key="productListItemIndex"
      class="mb-10"
    >
      <p class="mb-1 text-4xl font-medium dark:text-white">
        {{ productListItem.name }}
      </p>
      <div class="break-normal text-slate-400">
        {{ productListItem.description }}
      </div>
      <div class="flex flex-wrap mt-3 -m-4">
        <GalleryCard
          v-for="(product, productIndex) in productListItem.productList"
          :key="productIndex"
          :name="product.name"
          :description="product.description"
          :img="product.img"
          :link="product.link"
          :support-dark-mode="product.supportDarkMode"
          :lock="product.lock"
          :stage="product.stage"
          :tags="product.tags"
          class="m-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productCategory: [
        {
          name: 'Products',
          description: 'Products I participate / made',
          productList: [
            {
              name: 'let.sh',
              description:
                'The all-in-one development & deploy platform. Helps you expose your local service publicly & debug public requests. Deploy your frontend & backend services with a single command, benchmark your web pages with ease and served with automated https.',
              role: 'Creator',
              img: '/img/products/let.sh',
              link: 'https://let.sh/',
              stage: 'Alpha',
              tags: ['role:Creator'],
            },
            {
              name: 'Event Bridger',
              description:
                'The bridge for your SaaS, IM, Device. Including Stripe, SMS, Slack, etc.',
              role: 'Creator',
              img: '/img/products/eventbridger',
              stage: 'WIP',
              link: 'https://eventbridge.app/',
              tags: ['role:Creator'],
            },
            {
              name: 'Libra',
              description:
                'The A/B Testing platform inside ByteDance(aka. TikTok)',
              role: 'PM',
              stage: 'Online',
              lock: true,
              tags: ['role:PM'],
            },
            {
              name: 'BytePlus Optimize',
              description:
                'The A/B Testing for international market. provides flexible, end-to-end experimentation tools that help to improve products, apps, websites, and marketing engagement.',
              role: 'PM',
              img: '/img/products/byteplus',
              link: 'https://www.byteplus.com/en/product/data-intelligence/optimize',
              stage: 'Online',
              tags: ['role:PM'],
              // lock: true,
            },
            {
              name: 'DataTester',
              description:
                'The A/B Testing for China market. DataTester supports visual editor, multi-page, programming experiments and more.',
              role: 'PM',
              img: '/img/products/volcengine',
              link: 'https://www.volcengine.com/product/datatester',
              stage: 'Online',
              tags: ['role:PM'],
              // lock: true,
            },
          ],
        },
        {
          name: 'Maintained Services',
          description: 'Selfhost services I am maintaining',
          productList: [
            {
              name: 'Metabase',
              description:
                'A data management tool for business. I use it for data analysis and data visualization.',
              img: '/img/tools/metabase',
              link: 'https://data.fredliang.cn/',
            },
            {
              name: 'Grafana',
              description:
                'The open source analytics & monitoring solution for every database.',
              img: '/img/tools/grafana',
              link: 'https://grafana.letapp.co/',
            },
            {
              name: 'SSI Service',
              description:
                "The Self Sovereign Identity Service, facilitates all things relating to DIDs and Verifiable Credentials.The service is a part of a larger Decentralized Web Platform architecture under Jack Dorsey's Web5 design.",
              img: '/img/products/tbd',
              link: 'https://github.com/TBD54566975/ssi-service',
              supportDarkMode: true,
            },
            {
              name: 'DERP Server',
              description: 'The tailscale derp server for service discovery',
              img: '/img/tools/tailscale',
              link: 'https://derp.fredliang.cn/',
            },
            {
              name: 'File Store',
              description:
                'Personal sharing file index service. Including some ISO images, pictures, papers, book, etc.',
              img: '/img/products/files',
              link: 'https://drive.lzb.im/',
              supportDarkMode: true,
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
