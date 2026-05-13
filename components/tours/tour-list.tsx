"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { TourFilter } from "./tour-filter";
import { TourCard } from "./tour-card";
import { useTours } from "@/hooks/queries/use-tours";
import { TourCardSkeleton } from "@/components/skeletons/tour-card-skeleton";

export const TourList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryId = searchParams.get("category") || null;

  const { data: toursResponse, isLoading } = useTours({
    category: categoryId || undefined,
    isActive: true
  });

  const tours = toursResponse?.data || [];

  const handleCategoryChange = (id: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id) {
      params.set("category", id);
    } else {
      params.delete("category");
    }
    router.push(`/tours?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="bg-background py-24 border-t border-gray-100">
      <MaxWidthWrapper>
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-inria">
            Explore Our Trip Ideas
          </h2>
          <p className="text-paragraph text-lg opacity-80 font-roboto font-light">
            Let these itineraries inspire your personalized travel experience
          </p>
        </div>

        <div className="mb-6">
          <TourFilter
            selectedCategoryId={categoryId}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <TourCardSkeleton key={i} />
            ))}
          </div>
        ) : tours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {tours.map((tour: any) => (
              <TourCard
                key={tour._id}
                tour={{
                  id: tour._id,
                  title: tour.title,
                  location: tour.location,
                  duration: tour.duration,
                  description: tour.summary,
                  image: tour.coverImage,
                  price: tour.price,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border rounded-xl bg-section/50 border-dashed border-gray-200">
            <p className="text-lg text-paragraph font-light italic">
              No journeys found for this category yet.
            </p>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};
