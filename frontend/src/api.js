import axios from "axios";

// 根據環境自動選擇 API 端點
const API_BASE_URL = import.meta.env.PROD
  ? "https://myfirstfastapi.taiweideveloping.work"
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

export const getPdfUrl = (path) => {
  if (!path) return "";
  // If absolute URL, return as is (though backend data has relative /static/...)
  if (path.startsWith("http")) return path;
  return `${API_BASE_URL}${path}`;
};
