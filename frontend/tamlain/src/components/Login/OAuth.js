const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
// const REDIRECT_URI = "https://localhost:3000/oauth/callback/kakao"; // 프론트에서 접근가능한 URI여야한다.

const REDIRECT_URI = process.env.REACT_APP_SERVER_URI+"/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
