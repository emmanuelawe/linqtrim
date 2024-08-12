import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

const ButtonLoader = () => {
  return (
    <Button size='lg' disabled className="mt-10 md:text-lg">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    </Button>
  )
}

export default ButtonLoader
