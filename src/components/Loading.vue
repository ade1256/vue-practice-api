<template>
  <div>
    <md-progress-spinner class="md-accent" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
export default {
  name: 'ProgressSpinnerSizes'
}
</script>

<style lang="scss" scoped>
.md-progress-spinner {
  margin: 24px;
}
</style>