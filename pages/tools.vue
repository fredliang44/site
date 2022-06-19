<template>
  <div class="container py-5">
    <div class="mb-8">
      <p class="text-4xl font-medium dark:text-white">Tools</p>
      <p class="text-lg text-gray-500">The tools stack I use.</p>
    </div>
    <div
      v-for="(toolListItem, toolListItemIndex) in toolList"
      :key="toolListItemIndex"
      class="mb-10"
    >
      <p class="mb-4 text-4xl font-medium dark:text-white">
        {{ toolListItem.name }}
      </p>
      <div class="flex flex-wrap -m-4">
        <ToolsCard
          v-for="(tool, toolIndex) in toolListItem.tools"
          :key="toolIndex"
          :name="tool.name"
          :description="tool.description"
          :img="tool.img"
          :link="tool.link"
          :support-dark-mode="tool.supportDarkMode"
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
      toolList: [
        {
          name: 'Design',
          description: '',
          tools: [
            {
              name: 'Figma',
              description:
                'My primary design tool, Used for prototyping and wireframing. Previously I was using Sketch.',
              img: '/img/tools/figma',
              link: 'https://www.figma.com/',
            },
            {
              name: 'Framer',
              description: 'Using for some website building & prototyping.',
              img: '/img/tools/framer',
              link: 'https://framer.com/',
            },
          ],
        },
        {
          name: 'Code',
          description: '',
          tools: [
            {
              name: 'GitHub',
              description: 'My primary code management tool.',
              img: '/img/tools/github',
              link: 'https://github.com/fredliang44',
              supportDarkMode: true,
            },
            {
              name: 'VS Code',
              description:
                'Editor for frontend & small projects. Get work done faster.',
              img: '/img/tools/vscode',
              link: 'https://code.visualstudio.com/',
            },
            {
              name: 'Goland',
              description:
                'The IDE for golang projects with powerful toolkit. Made some fun & big project with it.',
              img: '/img/tools/goland',
              link: 'https://www.jetbrains.com/go/',
            },
          ],
        },
        {
          name: 'Network',
          description: '',
          tools: [
            {
              name: 'Surge',
              description: 'The gateway to the world.',
              img: '/img/tools/surge',
              link: 'https://nssurge.com//',
            },
            {
              name: 'Tailscale',
              description: 'Zero config VPN with service discovery.',
              img: '/img/tools/tailscale',
              link: 'https://tailscale.com/',
            },
            {
              name: 'WireGuard',
              description:
                'A secure VPN that can be used to protect your network.',
              img: '/img/tools/wireguard',
              link: 'https://www.wireguard.com/',
              supportDarkMode: true,
            },
          ],
        },
        {
          name: 'Communication',
          description: '',
          tools: [
            {
              name: 'Telegram',
              description:
                'Default IM tool for communication. No f**king content censoring.',
              img: '/img/tools/telegram',
              link: 'https://t.me/fredliang',
            },
            {
              name: 'Lark',
              description:
                'The real all in one toolkit for work, including IM, Email, Docs, Sheets, Bots and more.',
              img: '/img/tools/lark',
              link: 'https://www.larksuite.com/',
            },
            {
              name: 'Canary Mail',
              description:
                'Well designed email client with powerful features. But can meet some bugs occasionally : )',
              img: '/img/tools/canary',
              link: 'https://canarymail.io/',
            },
          ],
        },
        {
          name: 'Product Management',
          description: '',
          tools: [
            {
              name: 'Linear',
              description:
                'One of the most well-designed issue tracking tool in the world.',
              img: '/img/tools/linear',
              link: 'https://linear.app',
            },
            {
              name: 'NotePlan',
              description:
                'Manage hundreds of tasks and serval projects each day with a simple app.',
              img: '/img/tools/noteplan',
              link: 'https://noteplan.co/',
            },
          ],
        },
        {
          name: 'Infrastructure',
          description: '',
          tools: [
            {
              name: 'Nomad',
              description:
                'A cloud platform for building and deploying applications.',
              img: '/img/tools/nomad',
              link: 'https://www.nomadproject.io/',
              supportDarkMode: true,
            },
            {
              name: 'AWS',
              description:
                'The most popular cloud provider in the world. I use it for most of my projects.',
              img: '/img/tools/aws',
              link: 'https://aws.amazon.com/',
              supportDarkMode: true,
            },
            {
              name: 'Google Cloud',
              description:
                'Google Cloud Platform is a cloud computing platform that provides a complete suite of services, including storage, compute, networking, and other infrastructure, for the developer.',
              img: '/img/tools/googlecloud',
              link: 'https://cloud.google.com/',
            },
            {
              name: 'Azure',
              description:
                'Microsoft Azure is a cloud computing platform that provides a complete suite of services, including storage, compute, networking, and other infrastructure, for the developer.',
              img: '/img/tools/azure',
              link: 'https://azure.microsoft.com/',
            },
            {
              name: 'Tencent Cloud',
              description:
                'Tencent Cloud is a cloud computing platform that provides a complete suite of services, including storage, compute, networking, and other infrastructure, for the developer.',
              img: '/img/tools/tencentcloud',
              link: 'https://cloud.tencent.com/',
            },
          ],
        },
        {
          name: 'Data',
          description: '',
          tools: [
            {
              name: 'Metabase',
              description:
                'A data management tool for business. I use it for data analysis and data visualization.',
              img: '/img/tools/metabase',
              link: 'https://www.metabase.com/',
            },
            {
              name: 'Grafana',
              description:
                'The open source analytics & monitoring solution for every database.',
              img: '/img/tools/grafana',
              link: 'https://grafana.com/',
            },
            {
              name: 'Upstash',
              description: 'Serverless Redis & Kafka database platform.',
              img: '/img/tools/upstash',
              link: 'https://upstash.com/',
            },
            {
              name: 'ClickHouse',
              description:
                'A modern, distributed SQL database with a focus on scalability, performance, and ease of use.',
              img: '/img/tools/clickhouse',
              link: 'https://clickhouse.tech/',
            },
          ],
        },
      ],
    }
  },
}
</script>