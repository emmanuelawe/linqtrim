import { Skeleton } from '@/components/ui/skeleton'

const LoginSkeleton = () => {

return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 w-full max-w-md md:max-w-lg h-auto rounded-xl bg-gray-200">
    <Skeleton className="h-8 w-3/4 mb-4" /> {/* Placeholder for the title */}
    <Skeleton className="h-4 w-2/3 mb-8" /> {/* Placeholder for the subtitle */}
    <form className="w-full space-y-6">
      <div>
        <Skeleton className="h-4 w-1/3 mb-2" /> {/* Placeholder for the email label */}
        <Skeleton className="h-10 w-full rounded-md" /> {/* Placeholder for the email input */}
      </div>
      <div>
        <Skeleton className="h-4 w-1/3 mb-2" /> {/* Placeholder for the password label */}
        <Skeleton className="h-10 w-full rounded-md" /> {/* Placeholder for the password input */}
      </div>
      <Skeleton className="h-10 w-full mt-4 rounded-md" /> {/* Placeholder for the Log In button */}
      <Skeleton className="h-10 w-full mt-4 rounded-md" /> {/* Placeholder for the Google Sign In button */}
    </form>
    <Skeleton className="h-4 w-1/2 mt-6" /> {/* Placeholder for the footer text */}
  </div>
)

}
export default LoginSkeleton