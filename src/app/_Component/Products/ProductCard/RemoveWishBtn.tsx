
import { Button } from "@/components/ui/button";
import { RemoveFromWish } from "@/wishListActions";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

export default function RemoveWishBtn({ id }: { id: string }) {
   const router = useRouter();
  async function removeWish(id: string) {
    const data = await RemoveFromWish(id);
    console.log(data);
    if (data.status == "success") {
      toast.success(data.message);
      router.refresh();
    } else {
      toast.error(data.message);
    }
  }


  return (
    <Button
      onClick={() => {
        removeWish(id);
      }}
      className="bg-red-500"
    >
      Remove
    </Button>
  );
}
