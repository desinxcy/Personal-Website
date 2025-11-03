import Image from "next/image";

export default function Header() {
  return (
    <header className="flex gap-x-8 flex-col md:flex-row items-center">
      <div className="relative w-[150px] h-[150px]">
        <Image
          src="/rivaldi.jpg"
          alt="picture of author"
          fill
          className="rounded-full object-cover object-top"
        />
      </div>
      <div>
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-50 mb-1.5">
          Rivaldi
        </h1>
        <h2 className="text-lg font-light text-zinc-500 dark:text-zinc-300">
          Saya adalah seorang Programer
        </h2>
        <div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
          <span className="text-zinc-500 dark:text-zinc-300">
            Web Development
          </span>
        </div>
      </div>
    </header>
  );
}
