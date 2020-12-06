<template>
  <el-calendar :range="['2019-03-04', '2019-03-10']" class="calendar-el">
    <template
      slot="dateCell"
      slot-scope="{date, data}">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(2).join('-') }} {{ data.isSelected ? '✔️' : ''}}
      </p>
    </template>
  </el-calendar>
</template>

<script>
export default {
  name: 'Registration'
}
</script>

<style lang="less" scoped>
</style>
