<template>
  <div class="home">
    <keep-alive>
      <Table title="Employee"/>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table'

export default {
  name: 'home',
  components: { Table },
  mounted: function() {
    this.getEmployee()
  },
  methods: {
    async getEmployee() {
      let dataEmployee = []
      await this.axios
        .get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
          dataEmployee.push(response.data.splice(-5))
        })
      this.$store.commit('setDataEmployee', dataEmployee[0])
      console.log('state dataEmployee updated...')
    }
  }
}
</script>
