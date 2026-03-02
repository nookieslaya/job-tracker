import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="container mx-auto- mx-4 my-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black text-6xl mb-6 font-bold">
              A better way to track your application
            </h1>
            <p className="text-muted-foreground text-xl mb-10">
              Capture, organize, and manage
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link href="/sign-up">
              <Button size="lg" className="">
                Start for free <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <p className="text-small text-muted-foreground">
              Free forever. No credit card required
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
