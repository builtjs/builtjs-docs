import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/utils/cn";
import { cva } from "class-variance-authority";
import { buttonVariants } from "@/app/components/button";
import { HomeIcon } from "lucide-react";
import { Card, Cards } from "fumadocs-ui/components/card";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import type { ReactNode } from "react";
import { CreateAppAnimation } from "./page.client";
import { createMetadata } from "@/app/utils/metadata";
import {
  Heart,
  type LucideIcon,
  MousePointer,
  Sparkle,
  Terminal,
} from "lucide-react";
import {
  BatteryChargingIcon,
  CpuIcon,
  FileEditIcon,
  FileTextIcon,
  KeyboardIcon,
  LayoutIcon,
  LibraryIcon,
  PaperclipIcon,
  PersonStandingIcon,
  RocketIcon,
  SearchIcon,
  TimerIcon,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Docs",
  description: "Built.js docs",
  // openGraph: {
  //   url: 'https://fumadocs.vercel.app/showcase',
  // },
});

const badgeVariants = cva(
  "mb-2 inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground"
);

function Introduction(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2">
      <div className="flex flex-col px-6 py-12 border-t border-l md:py-16">
        <div className={cn(badgeVariants())}>1</div>
        <h3 className="text-xl font-bold">Customise your theme.</h3>
        <p className="text-fd-muted-foreground">
          Create the pages, components and data.
        </p>
        <div className="relative flex flex-col">
          <Files className="z-[2] mt-8 shadow-xl">
            <Folder name="components">
              <Folder name="elements"></Folder>
              <Folder name="plugins"></Folder>
              <Folder name="shared"></Folder>
              <Folder name="templates"></Folder>
            </Folder>
            <Folder name="lib">
              <Folder name="plugins">
                <Folder name="richjava_blog-basic"></Folder>
              </Folder>
              <File name="page.tsx" />
            </Folder>
            <Folder name="pages">
              <Folder name="api">
                <Folder name="plugins">
                  <Folder name="richjava_blog-basic"></Folder>
                </Folder>
              </Folder>
              <Folder name="author">
                <File name="[slug].tsx" />
              </Folder>
              <Folder name="post">
                <File name="[slug].tsx" />
              </Folder>
              <File name="_app.tsx" />
              <File name="_document.tsx" />
              <File name="about.tsx" />
              <File name="blog.tsx" />
              <File name="contact.tsx" />
              <File name="index.tsx" />
              <File name="services.tsx" />
            </Folder>
            <Folder name="public">
              <Folder name="data">
                <Folder name="collections">
                  <File name="authors.json" />
                  <File name="benefits.json" />
                  <File name="features.json" />
                  <File name="primary-menu-items.json" />
                  <File name="profiles.json" />
                  <File name="services.json" />
                  <File name="social-links.json" />
                </Folder>
                <Folder name="plugins">
                  <Folder name="richjava_blog-basic">
                    <Folder name="collections">
                      <File name="authors.json" />
                      <File name="posts.json" />
                      <File name="primary-menu-items.json" />
                      <File name="profiles.json" />
                      <File name="tags.json" />
                    </Folder>
                    <Folder name="schemas">
                      <File name="content-types.json" />
                      <File name="elements.json" />
                      <File name="global.json" />
                      <File name="sections.json" />
                    </Folder>
                    <File name="global.json" />
                    <File name="layout.json" />
                    <File name="module-pages.json" />
                    <File name="modules.json" />
                    <File name="pages.json" />
                    <File name="plugin.json" />
                    <File name="sections.json" />
                    <File name="templates.json" />
                  </Folder>
                </Folder>
                <Folder name="schemas">
                  <File name="content-types.json" />
                  <File name="elements.json" />
                  <File name="global.json" />
                  <File name="sections.json" />
                </Folder>
                <File name="global.json" />
                <File name="layout.json" />
                <File name="module-pages.json" />
                <File name="modules.json" />
                <File name="pages.json" />
                <File name="sections.json" />
                <File name="templates.json" />
                <File name="theme.json" />
              </Folder>
              <Folder name="images">
                <Folder name="plugins">
                  <Folder name="richjava_blog-basic">
                    <File name="image.png" />
                  </Folder>
                </Folder>
                <File name="image.png" />
              </Folder>
            </Folder>
            <Folder name="styles">
              <Folder name="plugins">
                <Folder name="richjava_blog-basic">
                  <File name="globals.css" />
                  <File name="index.css" />
                </Folder>
                <File name="globals.css" />
                <File name="index.css" />
              </Folder>
            </Folder>
            <File name="next.config.js" />
            <File name="tailwind.config.js" />
          </Files>
        </div>
      </div>
      <div className="flex flex-col px-6 py-12 border-t border-l md:py-16">
        <div className={cn(badgeVariants())}>2</div>
        <h3 className="text-xl font-bold">Publish it.</h3>
        <p className="mb-8 text-fd-muted-foreground">
          Send it to Built Studio where it can be used to create sites.
        </p>
        <CreateAppAnimation />
      </div>
    </div>
  );
}

function Highlights(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-row items-start justify-center p-8 pb-2 text-center border-t border-l col-span-full">
        <h2 className="pl-1 text-2xl font-semibold bg-pink-300/50">
          Highlights
        </h2>
        {/* <MousePointer className="mt-8 -ml-1" /> */}
      </div>
      <Highlight icon={RocketIcon} heading="Light and Fast.">
        Powerful documentation site with Next.js App Router.
      </Highlight>
      <Highlight icon={TimerIcon} heading="Performance.">
        Less client components, less Javascript, optimized images.
      </Highlight>
      <Highlight icon={LayoutIcon} heading="Accessibility & UX first.">
        Focus on user experience and accessibility.
      </Highlight>
      <Highlight icon={SearchIcon} heading="Syntax Highlighting.">
        Beautiful syntax highlighter, powered by{" "}
        <a href="https://shiki.style" rel="noreferrer noopener">
          Shiki
        </a>
        .
      </Highlight>
      <Highlight icon={KeyboardIcon} heading="Automation.">
        Useful remark/rehype plugins. Typescript Twoslash, OpenAPI docs
        generation, and more.
      </Highlight>
      <Highlight icon={PersonStandingIcon} heading="Personalized.">
        Advanced options for customising your theme in a comfortable way.
      </Highlight>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="px-6 py-12 border-t border-l">
      <div className="flex flex-row items-center gap-2 mb-4 text-fd-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="mx-auto my-20 text-center">
        <h1 className="mb-4 text-2xl font-bold">
          Build website themes and plugins
        </h1>
        <h1 className="mb-4 text-xl">with</h1>
        <div className="flex items-center m-auto">
          <Image
            className="dark:invert-0 invert"
            alt="Next.js"
            src="nextjs-logotype-dark-background.svg"
            width={170}
            height={200}
          />
          <div className="mx-10 text-xl">+</div>
          <Image
            className="dark:invert-0 invert"
            alt="Sanity"
            src="sanity-logotype--white-on-black.svg"
            width={200}
            height={200}
          />
        </div>
        {/* <div className="inline-flex items-center gap-3 mt-20 max-md:mx-auto">
          <Link
            href="/docs"
            className={cn(
              buttonVariants({ size: "lg", className: "rounded-full" })
            )}
          >
            Read the docs
          </Link>
          <a
            href="https://builtjs.com"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
                className: "rounded-full bg-fd-background",
              })
            )}
          >
            Go to Studio
          </a>
        </div> */}
        <br></br>
        <div className="inline-flex items-center gap-10 mt-20 max-md:mx-auto">
          <Link
            href="/docs"
            className={`border border-accent bg-white cursor-pointer font-semibold text-accent px-4 rounded-md text-md py-3 items-center`}
          >
            Read the docs
          </Link>
          <Link
            href="https://builtjs.com"
            className={`bg-accent hover:bg-accent-hover cursor-pointer font-semibold text-white px-4 rounded-md text-md py-3 items-center`}
          >
            Go to Studio
          </Link>
        </div>
      </section>

      <Introduction />
      {/* <Highlights /> */}

      {/* <Cards>
        <Card
          icon={<HomeIcon />}
          href="/"
          title="Home"
          description="Go back to home"
        />
      </Cards> */}
    </main>
  );
}
