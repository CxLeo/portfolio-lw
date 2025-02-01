import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="bg-red-300 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 -mt-24" >
      <div className="max-w-7xl w-full">
        <Hero/>

      </div>
    </main>
    
  );
}
