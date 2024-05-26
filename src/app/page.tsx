export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img src="/cat-1.gif" alt="cat" className="sm:w-72 w-36" />
        <h1 className="text-gray-900 font-medium sm:text-3xl text-xl">
          I love you :3
        </h1>
        <div className="flex items-center gap-8 mt-8">
          <a
            href="/yey"
            className="bg-gray-700 text-white sm:px-7 sm:py-3 px-5 py-3 rounded-lg sm:text-lg text-sm tracking-wider hover:opacity-90 active:scale-95 duration-100 select-none"
          >
            I love you too
          </a>
          <a
            href="/yakin"
            className="bg-gray-700 text-white sm:px-7 sm:py-3 px-5 py-3 rounded-lg sm:text-lg text-sm tracking-wider hover:opacity-90 active:scale-95 duration-100 select-none"
          >
            fuck you
          </a>
        </div>
      </div>
    </main>
  );
}
