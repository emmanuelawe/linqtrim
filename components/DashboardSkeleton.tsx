import { Skeleton } from '@/components/ui/skeleton'


const DashboardSkeleton = () => {
  return (
    <main className="container mx-auto px-4 md:px-0 mt-10">
      <h1 className="text-2xl font-bold mb-6">
        <Skeleton className="w-1/4 h-8" />
      </h1>

      <form className="flex flex-col gap-4 mb-10">
        <div className="flex rounded-xl w-full gap-2">
          <Skeleton className="flex  pl-4 py-3 pr-6 dark:bg-white md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-16 h-14 w-full rounded-s-xl" />
          <Skeleton className="flex  pr-4 pl-2 py-3 dark:bg-white text-center md:placeholder:text-base placeholder:italic placeholder:text-xs focus:outline-none md:h-16 h-14 w-[40%] md:w-[30%] rounded-e-xl" />
        </div>
        <button type="submit" className=" w-full md:w-auto">
          <Skeleton className="w-full h-10" />
        </button>
      </form>

      <div className="flex flex-col gap-12">
        <h2 className="font-bold text-2xl mb-4">
          <Skeleton className="w-1/4 h-8" />
        </h2>
        <div className="bg-white rounded-xl p-6 mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col w-[50%]">
              <Skeleton className="p-4  border-gray-300 rounded-xl bg-transparent mb-2" />
              <div className="space-x-4">
                <Skeleton className="w-32 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-20 h-6" />
              <div className="flex items-center gap-2">
                <Skeleton className="w-20 h-20 rounded-xl" />
                <Skeleton className="w-20 h-10" />
              </div>
              <Skeleton className="w-32 h-10" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col w-[50%]">
              <Skeleton className="p-4  border-gray-300 rounded-xl bg-transparent mb-2" />
              <div className="space-x-4">
                <Skeleton className="w-32 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-20 h-6" />
              <div className="flex items-center gap-2">
                <Skeleton className="w-20 h-20 rounded-xl" />
                <Skeleton className="w-20 h-10" />
              </div>
              <Skeleton className="w-32 h-10" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col w-[50%]">
              <Skeleton className="p-4  border-gray-300 rounded-xl bg-transparent mb-2" />
              <div className="space-x-4">
                <Skeleton className="w-32 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-20 h-6" />
              <div className="flex items-center gap-2">
                <Skeleton className="w-20 h-20 rounded-xl" />
                <Skeleton className="w-20 h-10" />
              </div>
              <Skeleton className="w-32 h-10" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col w-[50%]">
              <Skeleton className="p-4  border-gray-300 rounded-xl bg-transparent mb-2" />
              <div className="space-x-4">
                <Skeleton className="w-32 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-20 h-6" />
              <div className="flex items-center gap-2">
                <Skeleton className="w-20 h-20 rounded-xl" />
                <Skeleton className="w-20 h-10" />
              </div>
              <Skeleton className="w-32 h-10" />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default DashboardSkeleton;
