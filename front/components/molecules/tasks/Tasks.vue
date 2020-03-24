<template>
  <v-row>
    <v-col>
      <Task :tasks="this.$store.state.user.task.taskUnsupportedList" status_name="未処理"/>
    </v-col>
    <v-col>
      <Task :tasks="this.$store.state.user.task.taskProcessingList" status_name="処理中" />
    </v-col>
    <v-col>
      <Task :tasks="this.$store.state.user.task.taskCompletedList" status_name="完了" />
    </v-col>
  </v-row>
</template>

<script>
  import Task from '@/components/atoms/tasks/Task'
  export default {
    components: {
      Task
    },
  }
</script>
