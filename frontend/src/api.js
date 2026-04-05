import axios from "axios";

// 根據環境自動選擇 API 端點
// PROD: 前端由同一個 App Service 提供，使用相對路徑避免 CORS
// DEV: 前端跑在 Vite (5173)，後端跑在 uvicorn (8000)
const API_BASE_URL = import.meta.env.PROD
  ? ""
  : "http://localhost:8000";

export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/profile`);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null; // Or throw error to be handled by UI
  }
};

export const getAssetUrl = (path) => {
  if (!path) return "";
  // If absolute URL, return as is (though backend data has relative /static/...)
  if (path.startsWith("http")) return path;
  return `${API_BASE_URL}${path}`;
};

export const getPdfUrl = getAssetUrl;
