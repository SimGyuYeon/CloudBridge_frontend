import axios from 'axios';

const baseURL = axios.create({
    // baseURL: "http://10.10.2.37:8000", // API의 기본 URL 설정
    baseURL: "http://133.186.211.151:8000", // API의 기본 URL 설정
    // baseURL: "http://localhost:80", // API의 기본 URL 설정
    timeout: 3000, // 요청 타임아웃 설정 (10초)
    headers: {
      "Content-Type": "application/json", // 요청 헤더 설정
      // 다른 원하는 헤더 설정 가능
      "Access-Control-Allow-Origin": `http://133.186.211.151:8000`,
      'Access-Control-Allow-Credentials':"true",
    },
});

export default baseURL;