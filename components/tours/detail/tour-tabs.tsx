import { cn } from "@/lib/utils";

interface TourTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["TRIP OVERVIEW", "HIGHLIGHTS", "REVIEWS"];

export const TourTabs = ({ activeTab, setActiveTab }: TourTabsProps) => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-4 text-base font-semibold transition-all relative uppercase cursor-pointer",
              activeTab === tab
                ? "text-primary"
                : "text-paragraph/40 hover:text-paragraph"
            )}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

