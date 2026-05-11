import API_ROUTES from "@/config/routes";
import { api } from "./client";

export interface UploadResponse {
  url: string;
  publicId: string;
}

export const uploadImage = async (file: File, folder: string = "fleets"): Promise<{ data: UploadResponse; success: boolean }> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  return api.post(`${API_ROUTES.UPLOAD_PUBLIC}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
