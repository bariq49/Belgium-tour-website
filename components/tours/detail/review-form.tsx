"use client";

import React from "react";
import { Star, Send } from "lucide-react";
import { useCreateReview } from "@/hooks/queries/use-reviews";
import { cn } from "@/lib/utils";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";

interface ReviewFormProps {
  tourId: string;
}

interface ReviewFormValues {
  authorName: string;
  authorEmail: string;
  rating: number;
  comment: string;
}

export const ReviewForm = ({ tourId }: ReviewFormProps) => {
  const createReviewMutation = useCreateReview();

  const methods = useForm<ReviewFormValues>({
    defaultValues: {
      authorName: "",
      authorEmail: "",
      rating: 5,
      comment: "",
    },
  });

  const { watch, setValue, handleSubmit, reset } = methods;
  const currentRating = watch("rating");

  const onSubmit = (data: ReviewFormValues) => {
    createReviewMutation.mutate({
      ...data,
      tourId,
    }, {
      onSuccess: () => {
        reset();
      }
    });
  };

  return (
    <div className="bg-section p-8 md:p-12 border border-gray-100 space-y-10">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-foreground font-inria">Leave a Review</h3>
        <p className="text-sm font-medium text-paragraph opacity-70 font-roboto ">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <label className="text-sm font-semibold text-gray-700">Rating *</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setValue("rating", star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={cn(
                      "w-6 h-6 transition-colors",
                      star <= currentRating ? "fill-primary text-primary" : "text-gray-300"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Input
              name="authorName"
              label="Name"
              placeholder="Your Name"
              required
            />
            <Input
              name="authorEmail"
              type="email"
              label="Email"
              placeholder="Your Email"
              required
            />
          </div>

          <Input
            name="comment"
            type="textarea"
            label="Your Review"
            placeholder="Share your experience..."
            required
            rows={5}
          />

          <Button
            type="submit"
            loading={createReviewMutation.isPending}
            disabled={createReviewMutation.isPending}
            className="bg-black text-white w-fit text-sm font-semibold hover:bg-primary transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
          >
            <Send className="w-4 h-4" />
            Submit Review
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
