<template>
  <v-app>
    <v-form
      ref="form"
    >
      <v-row>
        <v-text-field
          label="検索フォーム"
          v-model="search_word"
          rounded
          outlined
          solo
          clearable
          dense
          flat
        >
        </v-text-field>
        <v-btn @click="searchTask(search_word)">検索</v-btn>
<!--        <TaskEditDialog title="新規作成" :list_detail="list"/>-->
      </v-row>
    </v-form>
    <Board/>
  </v-app>
</template>

<script>
  import Board from '@/components/atoms/boards/Board'
  import TaskEditDialog from "@/components/atoms/dialogs/TadkEditDialog";
  import {mapActions} from 'vuex'

  export default {
    async fetch ({store}){
      await store.dispatch('user/task/getTask')
    },
    components: {
      TaskEditDialog,
      Board,
    },
    data() {
      return {
        search_word: '',
        list: {
          list_detail: {
            name: '',
            detail: '',
          }
        }
      }
    },
    methods: {
      ...mapActions('user/task/', [
        'searchTask'
        ]
      )
    }
  }
</script>
