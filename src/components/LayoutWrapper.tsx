// src/components/LayoutWrapper.tsx
export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#3E4150] h-240">
        {children}
    </div>
  );
}
