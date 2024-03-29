import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { Ingredient } from "../interface/ingredient.type";

interface CartIngredientProps {
  ingredient: Ingredient;
  addIngredient: (id: string) => void;
  removeIngredient: (id: string) => void;
}

const MakeIngredient = ({
  ingredient,
  addIngredient,
  removeIngredient,
}: CartIngredientProps) => {
  const { alt, image, name, id, quantity, price, rotate } = ingredient;

  return (
    <Card className="rounded-[3rem]">
      <CardHeader>
        <Image
          src={image}
          alt={alt}
          width={104}
          height={37}
          className={cn("m-auto h-[30px]", rotate && "-rotate-12")}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-center text-gray-800 text-sm font-semibold leading-tight">
          {name}
        </h2>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => removeIngredient(id)}
          className="rounded-full p-2 bg-violet-50 group hover:bg-indigo-700"
        >
          <Minus className="stroke-indigo-700 group-hover:stroke-violet-50 " />
        </Button>
        <span className="text-xl font-bold ">{quantity}</span>
        <Button
          onClick={() => addIngredient(id)}
          className="rounded-full p-2 bg-violet-50 group hover:bg-indigo-700"
        >
          <Plus className="stroke-indigo-700 group-hover:stroke-violet-50 " />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MakeIngredient;
