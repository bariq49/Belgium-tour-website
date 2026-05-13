import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { useBookingStore } from "@/store/use-booking-store";
import { LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCategories } from "@/hooks/queries/use-categories";
import { useRouter } from "next/navigation";

export const BookingStep1 = () => {
  const { setStep1Data } = useBookingStore();
  const { data: categoriesResponse, isLoading } = useCategories();
  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      categoryId: "",
    },
  });

  const onSubmit = (data: any) => {
    setStep1Data({ categoryId: data.categoryId });
    if (data.categoryId) {
      router.push(`/tours?category=${data.categoryId}`);
    } else {
      router.push(`/tours`);
    }
  };

  const categoryOptions = React.useMemo(() => {
    return (categoriesResponse?.data || []).map((cat: any) => ({
      label: cat.name,
      value: cat._id,
    }));
  }, [categoriesResponse]);

  return (
    <div className="w-full">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          <div className="flex-grow h-[52px]">
            <Input
              name="categoryId"
              type="select"
              placeholder={isLoading ? "Loading categories..." : "Select tour category"}
              required
              icon={<LayoutGrid size={18} />}
              selectOptions={categoryOptions}
              inputClassName="h-full bg-white text-black text-lg rounded-sm md:rounded-r-none border-r-0"
              className="h-full"
            />
          </div>

          <Button
            type="submit"
            className="bg-black text-white h-[52px] px-8 text-lg font-bold rounded-sm md:rounded-l-none border border-white border-l-0"
          >
            Get Started
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
