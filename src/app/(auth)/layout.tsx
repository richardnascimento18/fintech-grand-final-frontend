import Image from "next/image";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <section className="flex w-full h-screen">
        <div className="flex flex-col items-center w-full h-full">
            <Image width={2000} height={2000} alt="asset-image" src="/img.jpg" className="min-w-full min-h-full object-cover box-border" />
        </div>
        <div className="flex flex-col items-center w-full h-full">
            {children}
        </div>
    </section>
  );
}