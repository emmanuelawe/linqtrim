import { Skeleton } from '@/components/ui/skeleton'


const DashboardSkeleton = () => {
  return (
    <main className="container mx-auto px-4 md:px-0 mt-10">
      <h1 className="text-2xl font-bold mb-6">
        <Skeleton className="w-1/4 h-8" />
      </h1>

      <form className="flex flex-col gap-4 mb-10">
        <div className="flex rounded-xl w-full shadow-md gap-2">
          <Skeleton className="flex dark:text-black pl-4 py-3 pr-6 border-2 border-gray-700/70 dark:border-white dark:bg-white md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-16 h-14 w-full rounded-s-xl" />
          <Skeleton className="flex dark:text-black pr-4 pl-2 py-3 border-2 border-gray-700/70 dark:border-white dark:bg-white text-center md:placeholder:text-base placeholder:italic placeholder:text-xs focus:outline-none md:h-16 h-14 w-[40%] md:w-[30%] rounded-e-xl" />
        </div>
        <button type="submit" className=" w-full md:w-auto">
          <Skeleton className="w-full h-10" />
        </button>
      </form>

      <div className="flex flex-col gap-12">
        <h2 className="font-bold text-2xl mb-4">
          <Skeleton className="w-1/4 h-8" />
        </h2>
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col w-[50%]">
              {/* <Skeleton className="p-4 dark:text-black border-2 border-gray-300 rounded-xl bg-transparent mb-2" /> */}
              <div className="space-x-4">
                <Skeleton className="w-32 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-20 h-6" />
              <div className="flex items-center gap-2">
                <Skeleton className="w-20 h-20 rounded-xl border-2 border-[#2EB77A]" />
                <Skeleton className="w-20 h-10" />
              </div>
              <Skeleton className="w-32 h-10" />
            </div>
          </div>

          <div className="mt-4 dark:text-black">
            <h3 className="font-bold text-xl text-[#2EB77A]">
              <Skeleton className="w-24 h-6" />
            </h3>
            <ul className="flex flex-col gap-4 mt-2">
              <Skeleton className="w-full h-20 bg-gray-50 p-4 rounded-xl shadow-sm" />
              <Skeleton className="w-full h-20 bg-gray-50 p-4 rounded-xl shadow-sm" />
              <Skeleton className="w-full h-20 bg-gray-50 p-4 rounded-xl shadow-sm" />
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardSkeleton;
