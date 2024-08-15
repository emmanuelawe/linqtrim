import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const ShortenLoader = () => {
  return (
    <Button
      size="lg"
      disabled
      className="url_button w-full md:w-auto md:h-16 h-14 shadow-md"
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    </Button>
  );
};

export default ShortenLoader;
