import Experience from "@/components/Experience";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto xl:px-48 sm:px-10 px-5 -mt-24" >
      <div className="lg:max-w-7xl xl:max-w-full w-full">
        <Hero/>
        <Experience/>
      </div>
    </main>
    
  );
}
