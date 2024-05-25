export default function Home() {
  return (
    <main className="h-[90vh] w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img src="/cat-4.gif" alt="cat" className="w-72 mb-6" />
        <h1 className="text-gray-900 font-medium text-3xl flex flex-col text-center gap-2">
          Pergi Ke Mall Yuk!
          <span className="inline-block">
            besok jam 1 siang, aku jemput ya :3
          </span>
        </h1>
      </div>
    </main>
  );
}
