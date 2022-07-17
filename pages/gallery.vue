<template>
  <div class="container py-4 mx-auto">
    <div
      v-for="(productListItem, productListItemIndex) in productCategory"
      :key="productListItemIndex"
      class="mb-10"
    >
      <p class="mb-1 text-4xl font-medium">
        {{ productListItem.name }}
      </p>
      <div class="break-normal text-slate-400">
        {{ productListItem.description }}
      </div>
      <div class="flex flex-wrap mt-3 -m-4 transition">
        <GalleryCard
          v-for="(product, productIndex) in productListItem.productList"
          :key="'product' + productIndex"
          :name="product.name"
          :description="product.description"
          :img="product.img"
          :link="product.link"
          :support-dark-mode="product.supportDarkMode"
          :lock="product.lock"
          :stage="product.stage"
          :tags="product.tags"
          :custom-img="product.customImg"
          :extend="product.extend"
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
              extend: {
                docs: 'https://docs.let.sh',
              },
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
              customImg: true,
            },
            {
              name: 'BytePlus Optimize',
              description:
                'The A/B Testing platform for international market. Providing flexible, end-to-end experimentation tools that help to improve products, apps, websites, and marketing engagement.',
              role: 'PM',
              img: '/img/products/byteplus',
              link: 'https://www.byteplus.com/en/product/data-intelligence/optimize',
              stage: 'Online',
              tags: ['role:PM'],
              extend: {
                docs: 'https://docs.byteplus.com/data-intelligence/docs/what-is-byteplus-optimize',
              },
              // lock: true,
            },
            {
              name: 'Tester',
              description:
                'The A/B Testing platform for China market. DataTester supports visual editor, multi-page, programming experiments and more.',
              role: 'PM',
              img: '/img/products/volcengine',
              link: 'https://www.volcengine.com/product/datatester',
              stage: 'Online',
              tags: ['role:PM'],
              extend: {
                docs: 'https://www.volcengine.com/docs/6287/65794',
              },
              // lock: true,
            },
          ],
        },
        {
          name: 'Company',
          description: 'My Company',
          productList: [
            {
              name: 'Oasis Networks, Inc.',
              img: '/img/products/oasis',
              description:
                'Oasis Networks, Inc. My first company, aiming to filling the gap between infra & developers.',
              role: 'Founder',
              link: 'https://oasis.ac',
              stage: 'Online',
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
              extend: {
                docs: 'https://docs.google.com/presentation/d/1SaHGyY9TjPg4a0VNLCsfchoVG1yU3ffTDsPRcU99H1E/mobilepresent?slide=id.g11c16fe40c4_0_1104',
              },
            },
            {
              name: 'DERP Server',
              description: 'The tailscale derp server for service discovery',
              img: '/img/tools/tailscale',
              link: 'https://derp.fredliang.cn/',
              extend: {
                docs: 'https://tailscale.com/kb/1118/custom-derp-servers/',
              },
            },
            {
              name: 'File Store',
              description:
                'Personal sharing file index service. Including some ISO images, pictures, papers, book, etc.',
              img: '/img/products/files',
              link: 'https://drive.lzb.im/',
              supportDarkMode: true,
              customImg: true,
            },
            {
              name: 'Cal',
              description:
                'The event-juggling scheduler for everyone. Focus on meeting, not making meetings.Personal sharing file index service. Including some ISO images, pictures, papers, book, etc.',
              img: '/img/products/cal',
              link: 'https://cal.srv.work/',
              supportDarkMode: true,
              customImg: true,
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
