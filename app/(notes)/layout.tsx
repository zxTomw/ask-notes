import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebarWrapper } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Assistant } from "@/components/assistant";
import {
  AssistantButton,
  AssistantPanelProvider,
} from "@/components/assistant-panel-context";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ask Notes",
  description: "An AI notes app",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider
          style={
            {
              "--sidebar-width": "19rem",
            } as React.CSSProperties
          }
        >
          <AppSidebarWrapper />
          <SidebarInset className="flex-col flex h-dvh">
            <AssistantPanelProvider>
              <div className=" top-0 bg-background z-10 w-full">
                <header className="flex flex-row h-16  items-center gap-2 px-4  w-full">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                          Building Your Application
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <div className="flex-grow" />
                  <AssistantButton />
                </header>
                <Separator orientation="horizontal" className="w-full" />
              </div>

              <ResizablePanelGroup
                direction="horizontal"
                autoSaveId="assistant-group"
              >
                <ResizablePanel id="main" order={1}>
                  <div className=" h-full overflow-y-auto">{children}</div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <Assistant />
              </ResizablePanelGroup>
            </AssistantPanelProvider>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
