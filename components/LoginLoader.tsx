import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const LoginLoader = () => {
  return (
    <Button
      disabled
      size="lg"
      type="submit"
      className="w-full mt-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md"
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    </Button>
  );
};

export default LoginLoader;
