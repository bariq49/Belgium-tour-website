import DefaultLayout from "@/layout/layout";

export default function DefaultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
