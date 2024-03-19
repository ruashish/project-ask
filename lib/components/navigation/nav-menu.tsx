'use client';

import { BarChartIcon, CrumpledPaperIcon, FrameIcon, LayersIcon, Share1Icon, TargetIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/lib/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

import { Icons } from '../icons';

const problemTypes: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  titleClassName?: string;
}[] = [
  {
    description: 'Seek answers in an orderly box of elements. Line up, folks!',
    href: '/doctype/array',
    icon: <LayersIcon className="rotate-90 group-hover:text-blue-600" />,
    title: 'Array',
    titleClassName: 'group-hover:text-red-500',
  },
  {
    description: 'A riddle wrapped in mystery. But, remember, every recursion has a base case!',
    href: '/doctype/recursion',
    icon: <TargetIcon className="group-hover:text-orange-500" />,
    title: 'Recursion',
    titleClassName: 'group-hover:text-red-500',
  },
  {
    description: "It’s about time... and space! Let's break it down and save it up!",
    href: '/doctype/dynamic_programming',
    icon: <CrumpledPaperIcon className="group-hover:text-green-500" />,
    title: 'Dynamic Programming',
    titleClassName: 'group-hover:text-red-500',
  },
  {
    description: 'Their connections make them strong. Separation is illusion!',
    href: '/doctype/graph',
    icon: <Share1Icon className="group-hover:text-purple-500" />,
    title: 'Graph',
    titleClassName: 'group-hover:text-red-500',
  },
  {
    description: 'Untangle the web of disorder! Make way for the neatly ordered!',
    href: '/doctype/sorting',
    icon: <BarChartIcon className="group-hover:text-red-500" />,
    title: 'Sorting',
    titleClassName: 'group-hover:text-red-500',
  },
  {
    description: 'Unlock the algorithmic treasure, because every element has a unique key.',
    href: '/doctype/hashing',
    icon: <FrameIcon className="group-hover:text-cyan-500" />,
    title: 'Hashing',
    titleClassName: 'group-hover:text-red-500',
  },
];

export const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex items-center gap-2">
              <Icons.logo className="h-6 w-6" />
              <div className="font-medium">project-ask</div>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">project_ask</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Problems</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {problemTypes.map((problemType) => (
                <ListItem
                  key={problemType.title}
                  href={problemType.href}
                  icon={problemType.icon}
                  title={problemType.title}
                >
                  {problemType.description}
                </ListItem>
              ))}
            </ul>
            <div className="h-fit w-full px-6 pb-4">
              <div className="h-full w-full rounded-md border py-4 text-center text-sm">Explore More</div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Activity</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon?: React.ReactNode; titleClassName?: string }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
