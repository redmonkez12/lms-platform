import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Courses() {
    return (
        <div>
            <Link href={"/teacher/create"}>
                <Button>
                    New Course
                </Button>
            </Link>
        </div>
    );
}