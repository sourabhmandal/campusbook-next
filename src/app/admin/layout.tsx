import { CreatePostDialog } from "@/components/posts/CreatePostDialog";
import { Search } from "@/components/search";
import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { authClient } from "@/lib/auth-client";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}
export default async function WorkspaceLayout({
  children,
}: WorkspaceLayoutProps) {
  const session = await authClient.getSession();
  // const headersList = await headers();

  return (
    <TooltipProvider>
      <div className="bg-slate-50">
        <main className="max-w-4xl mx-auto border-x min-h-screen bg-white">
          <header className="flex shrink-0 items-center justify-between gap-2 p-2 w-full border-b">
            <div className="h-10 w-15 flex justify-center items-center">
              <Image height={36} width={36} src="/AIT_LOGO.png" alt="search" />
            </div>
            <Separator orientation="vertical" className="gap-x-1 h-5" />
            <Search />
            <div className="flex items-center gap-4">
              {[{name: "Feed", link: `/admin`}, {name: "Members", link: `/admin/member`}].map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="hover:underline hover:text-primary text-slate-500"
                >
                  <span className="font-bold uppercase text-xs">{item.name}</span>
                </Link>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="uppercase" size={"sm"}>
                    <PlusIcon className="size-4" />
                    Create
                  </Button>
                </DialogTrigger>
                <CreatePostDialog />
              </Dialog>
            </div>
            <Separator orientation="vertical" className="h-5" />
            <ThemeToggle />
          </header>
          <div className="flex items-center justify-between gap-2 p-1 w-full border-b bg-muted">
            <h2 className="text-xs text-slate-400 font-bold">
              Logged In as {session?.data?.user?.email}
            </h2>
          </div>
          {children}
        </main>
      </div>
    </TooltipProvider>
  );
}
