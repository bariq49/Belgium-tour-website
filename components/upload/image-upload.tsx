"use client";

import React, { useCallback } from "react";
import { UploadCloud, X, Loader2, FileText } from "lucide-react";
import { useUpload } from "@/hooks/queries/use-upload";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  onRemove: () => void;
  label?: string;
  className?: string;
  /** Applied to the clickable frame (e.g. aspect-video for cover images). */
  frameClassName?: string;
  variant?: "default" | "circle";
  error?: boolean;
}

export const ImageUpload = ({
  value,
  onChange,
  onRemove,
  label = "Upload Image",
  className,
  frameClassName,
  variant = "default",
  error,
}: ImageUploadProps) => {
  const uploadMutation = useUpload();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      uploadMutation.mutate(
        { file },
        {
          onSuccess: (response) => {
            onChange(response.data.url);
          },
        }
      );
    },
    [onChange, uploadMutation]
  );

  const onContainerClick = () => {
    fileInputRef.current?.click();
  };

  const isCircle = variant === "circle";
  const isImage = value && (value.match(/\.(jpeg|jpg|gif|png|webp)$/i) || value.includes("cloudinary.com"));

  return (
    <div className={cn("space-y-2", isCircle ? "" : "w-full", className)}>
      <div
        onClick={onContainerClick}
        className={cn(
          "relative flex flex-col items-center justify-center border-2 transition-all cursor-pointer hover:bg-muted/50",
          isCircle ? "rounded-full aspect-square w-full h-full mx-auto p-0 overflow-hidden bg-muted/20" : "rounded-sm p-6 w-full",
          !isCircle && frameClassName,
          !value && (error ? "border-error bg-error/5" : "border-dashed border-muted-foreground/20"),
          value && (isCircle ? "border-primary/20 shadow-sm" : "border-primary/40 bg-primary/5 border-dashed"),
          uploadMutation.isPending && "opacity-50 cursor-not-allowed"
        )}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleUpload}
          accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx"
          className="hidden"
          disabled={uploadMutation.isPending}
        />

        {value ? (
          <div className="relative w-full h-full group flex items-center justify-center bg-muted/10">
            {isImage ? (
              <img
                src={value}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-4">
                <FileText className="w-10 h-10 text-primary mb-2" />
                <span className="text-[10px] font-medium text-center break-all px-2">Document Uploaded</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove();
                }}
                className="p-1.5 bg-destructive text-destructive-foreground rounded-full hover:scale-110 transition-transform mb-2"
              >
                <X className="w-4 h-4" />
              </button>
              {isCircle && <span className="text-[10px] font-bold uppercase tracking-wider">Change</span>}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4">
            <div className="p-2.5 rounded-full bg-primary/10 text-primary mb-2">
              {uploadMutation.isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <UploadCloud className="w-5 h-5" />
              )}
            </div>
            {!isCircle && (
              <>
                <p className="text-sm font-semibold text-foreground text-center">{label}</p>
                <p className="text-xs text-muted-foreground mt-1 text-center">
                  PNG, JPG, PDF (max 5MB)
                </p>
              </>
            )}
            {isCircle && (
              <p className="text-[10px] font-bold text-center px-2 uppercase tracking-tight">{label || "Upload"}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface MultiImageUploadProps {
  value: string[];
  onChange: (urls: string[]) => void;
  onRemove: (url: string) => void;
  maxImages?: number;
  label?: string;
  className?: string;
}

export const MultiImageUpload = ({
  value,
  onChange,
  onRemove,
  maxImages = 4,
  label = "Upload Images",
  className,
}: MultiImageUploadProps) => {
  const uploadMutation = useUpload();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length === 0) return;

      const remainingSlots = maxImages - value.length;
      const filesToUpload = files.slice(0, remainingSlots);

      for (const file of filesToUpload) {
        uploadMutation.mutate(
          { file },
          {
            onSuccess: (response) => {
              onChange([...value, response.data.url]);
            },
          }
        );
      }
    },
    [onChange, uploadMutation, value, maxImages]
  );

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {value.map((url, index) => (
          <div key={index} className="relative aspect-square rounded-sm overflow-hidden group border bg-muted">
            <img src={url} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => onRemove(url)}
              className="absolute top-2 right-2 p-1.5 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        {value.length < maxImages && (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center border-2 border-dashed rounded-sm aspect-square cursor-pointer hover:bg-muted/50 transition-all border-muted-foreground/20"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleUpload}
              accept="image/*"
              multiple
              className="hidden"
            />
            <div className="p-2 rounded-full bg-primary/10 text-primary mb-2">
              {uploadMutation.isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <UploadCloud className="w-5 h-5" />
              )}
            </div>
            <p className="text-[10px] font-medium text-center px-2">{label}</p>
          </div>
        )}
      </div>
    </div>
  );
};
