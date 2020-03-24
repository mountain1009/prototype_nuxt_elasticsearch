import {axios} from '@/plugins/axios/index';

export const strict = false;

export const state = () => ({
  taskUnsupportedList: [],
  taskProcessingList: [],
  taskCompletedList: []
});

export const getters = {
  detail: (state) => (index, status) => {
    if (status === 'unsupported') {
      return state.taskUnsupportedList[index]
    } else if (status === 'processing') {
      return state.taskUnsupportedList[index]
    } else {
      return state.taskUnsupportedList[index]
    }
  }
};

export const mutations = {
  setTaskList(state, payload) {
    let unsupported = [];
    let processing = [];
    let completed = [];
    payload.forEach((v) => {
      if (v.status === 'unsupported') {
        unsupported.push(v)
      } else if (v.status === 'processing') {
        processing.push(v)
      } else {
        completed.push(v)
      }
    });
    state.taskUnsupportedList = unsupported;
    state.taskProcessingList = processing;
    state.taskCompletedList = completed;
  },
  saveTask(state, payload) {
    console.log(payload)
    state.taskUnsupportedList = [];
    state.taskProcessingList = [];
    state.taskCompletedList = [];

    let unsupported = [];
    let processing = [];
    let completed = [];
    payload.data.forEach((v) => {
      if (v.status === 'unsupported') {
        unsupported.push(v)
      } else if (v.status === 'processing') {
        processing.push(v)
      } else {
        completed.push(v)
      }
    });
    state.taskUnsupportedList = unsupported;
    state.taskProcessingList = processing;
    state.taskCompletedList = completed;
  }
};


export const actions = {
  async getTask({commit}) {
    const {data} = await axios.get("v1/users/tasks");
    commit('setTaskList', data)
  },
  async searchTask({commit}, search_word) {
    let param;
    if (search_word === undefined) {
      param = ""
    } else {
      param = `?search_word=${search_word}`
    }
    const {data} = await axios.get(`v1/users/tasks${param}`);
    commit('setTaskList', data)
  },
  updateTask({commit}, {payload, name, detail, status}) {
    let record = {
      name: payload.name,
      detail: payload.detail,
      status: payload.status
    };
    if (name !== undefined) {
      record.name = name;
    }
    if (detail !== undefined) {
      record.detail = detail;
    }
    if (status !== undefined) {
      record.status = status;
    }
    axios.put(`v1/users/tasks/${payload.id}`, record).then((val) => {
      commit('saveTask', val)
    });
  },
  registerTask({commit}, record) {
    let detail = {
      name: record.name,
      detail: record.detail,
      status: "unsupported"
    };
    const {data} = axios.put(`v1/users/tasks/${record.id}`, detail);
    commit('setTaskList', data)
  },
};
