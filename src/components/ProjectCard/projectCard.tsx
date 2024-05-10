import { cn } from "@/lib/utils"
import { BellRing, Check, PackageOpen } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"
import { Switch } from "../ui/switch"
import { Badge } from "../ui/badge"
import { AspectRatio } from "../ui/aspect-ratio"


const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

type CardProps = React.ComponentProps<typeof Card>

export function ProjectCard({ className, ...props }: CardProps) {


    return (
        <>
            <Card className={cn("w-[360px]", className)} {...props}>
                <CardHeader>
                    <Badge className="w-fit mb-2 gap-2">
                        <PackageOpen />
                        Projeto freelancer
                    </Badge>
                    <CardTitle>Brasequip</CardTitle>
                    <CardDescription>Desenvolvimento de um WebSite Institucional para a empresa Brasequip, utilizando React.js/Vite.js com Typescript e Figma para prototipação, com a metodologia RAD</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col">

                    <div className="flex flex-wrap justify-between gap-y-2">
                        <Badge className="w-fit mb-2 gap-2">
                            <PackageOpen />
                            Projeto freelancer
                        </Badge>

                        <Badge className="w-fit mb-2 gap-2">
                            <PackageOpen />
                            Projeto freelancer
                        </Badge>

                        <Badge className="w-fit mb-2 gap-2">
                            <PackageOpen />
                            Projeto freelancer
                        </Badge>
                    </div>

                    <div className="w-full">
                        <AspectRatio ratio={16 / 9}>
                            <img src="setup.webp" alt="Image" className="rounded-md object-cover" />
                        </AspectRatio>
                    </div>

                </CardContent>
                <CardFooter>
                    <Button className="w-full">
                        <Check className="mr-2 h-4 w-4" /> Mark all as read
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}