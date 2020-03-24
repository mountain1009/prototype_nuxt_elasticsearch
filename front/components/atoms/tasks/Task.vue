<template>
  <v-card
    class="mx-auto"
  >
    <v-list three-line>
      <v-subheader>{{status_name}}</v-subheader>
      <template v-for="(task, index) in tasks">
        <v-list-item>
          <v-list-item-avatar>
            <img
              alt="Avatar"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            >
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="task.name"></v-list-item-title>
            <v-list-item-subtitle v-html="task.detail"></v-list-item-subtitle>
          </v-list-item-content>
          <TadkEditDialog title="編集" :task="task" :index="index"/>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  import TadkEditDialog from "@/components/atoms/dialogs/TadkEditDialog";
  export default {
    props: {
      status_name: {
        type: String,
        required: true,
      },
      tasks: {
        type: Array,
        required: true,
      }
    },
    components: {
      TadkEditDialog,
    },
  }
</script>
