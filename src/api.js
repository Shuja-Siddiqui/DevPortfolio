const BASE_URL = "http://localhost:5000";

export const getImageRequest = (i_id) => {
  return `${BASE_URL}/file/${i_id}`;
};
