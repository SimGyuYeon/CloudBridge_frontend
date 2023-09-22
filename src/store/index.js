import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

// Load Vuex
Vue.use(Vuex);

const localStoragePlugin = (store) => {
  store.subscribe((mutation, { user }) => {
    if (mutation.type === "setUserData") {
      window.localStorage.setItem("user", JSON.stringify(user));
    }
  });
};

function convertDataToChartData(dataArray) {
  // 빈 객체를 생성합니다.
  const chartData = {
    labels: [],
    datasets: [
      {
        label: "Actual",
        backgroundColor: "#f87979",
        borderColor: "#f87979",
        data: [],
      },
      {
        label: "Predict",
        backgroundColor: "#686ADE",
        borderColor: "#686ADE",
        data: [],
      },
    ],
  };

  // 주어진 배열을 순회하면서 필요한 데이터를 추출합니다.
  dataArray.forEach((item) => {
    // pred_dt 값을 년-월-일T시간 형식으로 변환하여 labels 배열에 추가합니다.
    const predDt = new Date(item.pred_dt);
    const formattedPredDt = `${predDt.getFullYear()}-${(predDt.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${predDt.getDate()}T${predDt.getHours()}`;
    chartData.labels.push(formattedPredDt);

    // pred_value와 real_value 값을 해당 데이터셋에 추가합니다.
    chartData.datasets[0].data.push(item.real_value);
    chartData.datasets[1].data.push(item.pred_value);
  });

  return chartData;
}

export default new Vuex.Store({
  state: {
    images: [1, 2, 3],
    user: {
      userId: 1,
      username: "",
      password: "",
      token: "",
      isLogin: false,
    },
    fields: [
      {
        key: "no",
        label: "No.",
        thClass: "text-center",
        tdClass: "text-center",
      },
      {
        key: "name",
        label: "파일명",
        thClass: "text-center",
        tdClass: "text-center",
      },
      {
        key: "진행현황",
        label: "진행현황",
        thClass: "text-center",
        tdClass: "text-center",
      },
    ],
    items: [
      { no: 1, name: "power.csv", 진행현황: "진행중" },
      { no: 2, name: "power.csv", 진행현황: "진행중" },
      { no: 3, name: "power.csv", 진행현황: "진행중" },
      { no: 4, name: "power.csv", 진행현황: "진행중" },
    ],
    chartData: {
      labels: [],
      datasets: [
        {
          label: "Actual",
          backgroundColor: "#f87979",
          borderColor: "#f87979",
          data: [],
        },
        {
          label: "Predict",
          backgroundColor: "#686ADE",
          borderColor: "#686ADE",
          data: [],
        },
      ],
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      state.user.isLogin = true;
    },
    // 리스트 불러온 후 새로 넘버링
    SET_ITEMS(state, items) {
      const itemsWithNewIds = items.map((item, index) => ({
        ...item,
        no: index + 1,
      }));
      state.items = itemsWithNewIds;
    },
    SET_CHART(state, payload) {
      const dataArray = payload;
      // 위 함수를 사용하여 변환된 데이터를 가져옵니다.
      const chartData = convertDataToChartData(dataArray);
      console.log(chartData); // 변환된 데이터 확인
      state.chartData = chartData;
    },
    SET_IMAGES(state, payload) {
      console.log(payload);
      state.images = payload;
    },
  },
  actions: {
    FETCH_ITEMS({ commit }, userId) {
      console.log(`GET : /api/filelist/?id=${userId}`);
      axios.get("/api/filelist/", { id: userId }).then((response) => {
        let items = response.data;
        commit("SET_ITEMS", items);
      });
    },
    FETCH_CHART({ commit }, payload) {
      axios.get("/api/filelist/" + payload.id + "/detail").then((response) => {
        let pred_list = response.data["pred_list"];
        console.log(pred_list);
        let graph_list = response.data["graph_list"];
        commit("SET_CHART", pred_list);
        commit("SET_IMAGES", graph_list[0]);
      });
    },
    FETCH_IMAGES({ commit }, payload) {
      commit("SET_IMAGES", payload);
    },
    async FETCH_LOGIN({ commit }, { username, password }) {
      await axios
        .post("/users/login/", {
          username,
          password,
        })
        .then((response) => {
          let token = response.data["token"];
          let userId = response.data["user_id"];
          commit("SET_USER_DATA", { userId, username, password, token });
        });
    },
  },
  getters: {},
  plugins: [localStoragePlugin],
});
