import { GitProject } from "@/types/git-project";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface RepositoryCardProps {
    project: GitProject;
    loading: boolean;
}

export function RepositoryCard({ project, loading }: RepositoryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            layout
            className="max-h-[434px]"
        >
            <Card>
                <CardHeader className="pb-0 min-h-[46px]">
                    {!loading && project?.fork && <Badge className="w-fit">Fork</Badge>}
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-6 text-justify gap-4">
                    {loading ? (
                        <Skeleton className="min-h-[50px] w-[50px] rounded-full" />
                    ) : (
                        <FaGithub size={50} className="min-h-[50px]" />
                    )}
                    {loading ? (
                        <Skeleton className="min-h-[32px] w-3/4" />
                    ) : (
                        <span className="text-2xl font-semibold min-h-[32px]">
                            {project.name}
                        </span>
                    )}
                    {loading ? (
                        <Skeleton className="min-h-[160px] max-h-[160px] w-full" />
                    ) : (
                        <CardDescription className="min-h-[160px] max-h-[160px]">
                            {project.description}
                        </CardDescription>
                    )}
                </CardContent>
                <CardFooter>
                    {loading ? (
                        <Skeleton className="w-full h-10" />
                    ) : (
                        <a className="w-full" href={project.html_url} target="_blank">
                            <Button className="w-full flex">
                                <Link className="mr-2 h-4 w-4" /> Link
                            </Button>
                        </a>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
