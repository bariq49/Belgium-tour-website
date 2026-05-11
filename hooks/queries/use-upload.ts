import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "@/lib/api/upload";
import toast from "react-hot-toast";

export const useUpload = () => {
  return useMutation({
    mutationFn: ({ file, folder }: { file: File; folder?: string }) => uploadImage(file, folder),
    onError: (error: any) => {
      toast.error(error?.message || "Failed to upload image");
    },
  });
};
