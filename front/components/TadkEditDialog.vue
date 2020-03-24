<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">{{title}}</v-btn>
      </template>
      <v-card>
        <v-form
          ref="form"
        >
          <v-card-title class="headline">{{title}}</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-text-field
                  dense
                  label="題名"
                  v-model="taskName"
                ></v-text-field>
                <v-textarea
                  label="詳細"
                  auto-grow
                  v-model="taskDetail"
                ></v-textarea>
                <v-select
                  v-model="taskStatus"
                  :items="statuses"
                  label="ステータス"
                  dense
                  @change="down"
                ></v-select>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="down">閉じる</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: {
      title: {
        type: String,
      },
      index: {
        type: Number
      },
      task: {
        type: Object
      }
    },
    computed: {
      taskName: {
        get() {
          return this.$store.getters['user/task/detail'](this.index, this.task.status).name
        },
        set(name) {
          let value = {
            payload: this.task,
            name: name,
          };
          this.$store.dispatch('user/task/updateTask', value)
        },
      },
      taskDetail: {
        get() {
          return this.$store.getters['user/task/detail'](this.index, this.task.status).detail
        },
        set(detail) {
          let value = {
            payload: this.task,
            detail: detail,
          };
          this.$store.dispatch('user/task/updateTask', value)
        },
      },
      taskStatus: {
        get() {
          return this.$store.getters['user/task/detail'](this.index, this.task.status).status
        },
        set(status) {
          let value = {
            payload: this.task,
            status: status,
          };
          this.$store.dispatch('user/task/updateTask', value)
        },
      }
    },
    data() {
      return {
        dialog: false,
        statuses: ["unsupported", "processing", "completed"]
      }
    },
    methods: {
      ...mapActions(["user/task/updateTask"]),
      down(){
        this.dialog = false
      }
    }
  }
</script>
