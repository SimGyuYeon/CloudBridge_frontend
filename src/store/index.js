import Vuex from "vuex";
import Vue from "vue";
import baseURL from "@/store/baseUrl";

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
        label: "예측값",
        backgroundColor: "#f87979",
        data: [],
      },
      {
        label: "실측값",
        backgroundColor: "#686ADE",
        data: [],
      },
    ],
  };

  // 주어진 배열을 순회하면서 필요한 데이터를 추출합니다.
  dataArray.forEach((item) => {
    // pred_dt 값을 년-월-일T시간 형식으로 변환하여 labels 배열에 추가합니다.
    const predDt = new Date(item.pred_dt);
    console.log(item.pred_dt);
    const formattedPredDt = `${predDt.getFullYear()}-${(predDt.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${predDt.getDate()}T${predDt.getHours()}`;
    chartData.labels.push(formattedPredDt);

    // pred_value와 real_value 값을 해당 데이터셋에 추가합니다.
    chartData.datasets[0].data.push(item.pred_value);
    chartData.datasets[1].data.push(item.real_value);
  });

  return chartData;
}

export default new Vuex.Store({
  state: {
    images: [1, 2, 3],
    user: {
      account: "",
      password: "",
      isLogin: false,
    },
    fields: [
      {
        key: "id",
        label: "id",
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
      { id: 1, name: "power.csv", 진행현황: "진행중" },
      { id: 2, name: "power.csv", 진행현황: "진행중" },
      { id: 3, name: "power.csv", 진행현황: "진행중" },
      { id: 4, name: "power.csv", 진행현황: "진행중" },
    ],
    chartData: {
      labels: [],
      datasets: [
        {
          label: "예측값",
          backgroundColor: "#f87979",
          data: [],
        },
        {
          label: "실측값",
          backgroundColor: "#686ADE",
          data: [],
        },
      ],
    },
  },
  mutations: {
    setUserData(state, { userData }) {
      state.user.account = userData.account;
      state.user.password = userData.password;
      state.user.isLogin = true;
    },
    SET_ITEMS(state, items) {
      console.log(items);
      state.items = items;
    },
    SET_CHART(state, payload) {
      console.log("2222222222");
      console.log(payload);
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
    FETCH_ITEMS({ commit }, payload) {
      baseURL.get("/api/filelist/" + payload).then((response) => {
        let items = response.data;
        commit("SET_ITEMS", items);
      });
    },
    FETCH_CHART({ commit }, payload) {
      baseURL.get("/api/filelist/" + payload.id + "/detail").then((response) => {
        let pred_list = response.data["pred_list"];
        let graph_list = response.data["graph_list"];
        commit("SET_CHART", pred_list);
        commit("SET_IMAGES", graph_list[0]);
      });
    },
    FETCH_IMAGES({ commit }, payload) {
      commit("SET_IMAGES", payload);
    },
  },
  getters: {},
  plugins: [localStoragePlugin],
});
