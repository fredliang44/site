<template>
  <div class="scroll-bar">
    <div class="skills">
      <p v-for="skill in skills" :key="skill.index">{{ skill }}</p>
    </div>
    <div class="tools">
      <p v-for="tool in tools" :key="tool.index">{{ tool }}</p>
    </div>
  </div>
</template>
<script>
const skills = [
  'Product Management',
  'Frontend',
  'Filming',
  'Special Effects',
  'Video Editing',
  'Backend',
  'Web Development',
  'Filming',
  'Visual Design',
  'Post-Processing',
  'Frontend',
  'Video Editing',
]

const tools = [
  'PhotoShop',
  'Vue',
  'Golang',
  'Edius',
  'SpeedGrade',
  'Python',
  'Figma',
  'Premiere',
  'Lightroom',
  'Cinema 4D',
  'Golang',
  'Sketch',
  'Gin',
  'Color',
  'Final Cut Pro',
]
export default {
  data() {
    return {
      skills,
      tools,
    }
  },
}
</script>

<style lang="less">
.dark-mode .tools > p {
  color: rgb(180, 180, 180);
}

.dark-mode .skills > p {
  color: rgb(180, 180, 180);
}

.skills,
.tools {
  p {
    font-size: 36px;
    display: inline;
    margin-right: 36px;
    white-space: nowrap;
    color: rgb(93, 93, 93);
  }
}

.tools {
  transform: translateX(-700px);
}
</style>
