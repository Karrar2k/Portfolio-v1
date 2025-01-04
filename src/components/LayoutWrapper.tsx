// src/components/LayoutWrapper.tsx
export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#3E4150]">
      <div className="bg-[#2C2E39] w-full max-w-4xl flex flex-col rounded shadow-md overflow-hidden">
        {children}
      </div>
    </div>
  );
}
