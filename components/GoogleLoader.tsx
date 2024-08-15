import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const GoogleLoader = () => {
  return (
    <Button
      disabled
      size="lg"
      type="submit"
      className="w-full mt-4 py-2 border border-gray-300 text-gray-700 dark:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    </Button>
  );
};

export default GoogleLoader;
