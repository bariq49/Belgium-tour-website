import DefaultLayout from "@/layout/layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
