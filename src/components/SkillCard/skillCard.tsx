import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription
} from "../ui/card";
import { FaReact } from "react-icons/fa";
import { Progress } from "../ui/progress";
type CardProps = React.ComponentProps<typeof Card>;

export function SkillCard({ className, ...props }: CardProps) {

    return (
        <Card className={cn("w-full h-fit", className)} {...props}>
            <CardContent className="flex flex-col min-h-[16em] justify-center gap-2 px-4 py-14">
                <div className="flex w-full items-center">
                    <div className="w-2/4 md:w-1/4">
                        <FaReact size={80} />
                    </div>
                    <CardDescription className="w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque tempora quia nisi, exercitationem consequatur repellendus quaerat eveniet molestias debitis totam dolore error aliquid excepturi ipsum alias possimus voluptatibus. Illo, distinctio!</CardDescription>
                </div>
                <Progress value={13} className="w-full" />
            </CardContent>
        </Card>
    );
}
