<template>
  <v-card
    flat
    class="grey lighten-5"
    min-height="60%"
  >
    <Tasks/>
  </v-card>
</template>

<script>
  import Tasks from "@/components/molecules/tasks/Tasks";
  export default {
    components:{
      Tasks
    },
  }
</script>
