export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img src="/cat-1.gif" alt="cat" className="w-72" />
        <h1 className="text-gray-900 font-medium text-3xl">
          Mau ga jadi pacar aku :3?
        </h1>
        <div className="flex items-center gap-8 mt-8">
          <a
            href="/yey"
            className="bg-gray-700 text-white px-7 py-3 rounded-lg text-lg tracking-wider hover:opacity-90 active:scale-95 duration-100"
          >
            Mau Dong
          </a>
          <a
            href="/yakin"
            className="bg-gray-700 text-white px-7 py-3 rounded-lg text-lg tracking-wider hover:opacity-90 active:scale-95 duration-100"
          >
            No, fuk yu
          </a>
        </div>
      </div>
    </main>
  );
}
