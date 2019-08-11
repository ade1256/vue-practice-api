<template>
  <div class="table">
    <md-table
      v-model="$store.state.dataEmployee"
      md-card
      @md-selected="onSelect"
      md-sort="name"
      md-sort-order="asc"
    >
      <md-table-toolbar>
        <h1 class="md-title">{{title}}</h1>
      </md-table-toolbar>

      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>
      <div v-if="$store.state.dataEmployee.length  < 1" style="text-align:center">
        <Loading/>
      </div>
      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
        md-selectable="multiple"
        md-auto-select
      >
        <md-table-cell md-label="ID" md-numeric md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="employee_name">{{ item.employee_name }}</md-table-cell>
        <md-table-cell md-label="Salary" md-sort-by="employee_salary">{{ item.employee_salary }}</md-table-cell>
        <md-table-cell md-label="Age" md-sort-by="employee_age">{{ item.employee_age }}</md-table-cell>
        <md-table-cell md-label="Image" md-sort-by="profile_image">{{ item.profile_image }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  name: 'Table',
  components: { Loading },
  props: ['title'],
  data: () => ({
    selected: []
  }),
  mounted: function() {},
  methods: {
    onSelect(items) {
      this.selected = items
    },
    getAlternateLabel(count) {
      let plural = ''

      if (count > 1) {
        plural = 's'
      }

      return `${count} user${plural} selected`
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  position: relative;
  width: 900px;
  margin: 0 auto;
  top: 100px;
}
</style>
