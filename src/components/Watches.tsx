import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ListItem } from "./TopMenu";
const Watches = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-none">Watches</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                {/* <Icons.logo className="h-6 w-6" /> */}
                <div className="relative mb-2 h-full w-full text-lg font-medium">
                  <Image src="/watch.png" fill alt="laptop" />
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Beautifully designed components built with Radix UI and
                  Tailwind CSS.
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
  );
};
export default Watches;
