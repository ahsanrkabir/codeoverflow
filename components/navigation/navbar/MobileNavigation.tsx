import Image from "next/image";
import Link from "next/link";

import NavLinks from "@/components/navigation/navbar/NavLinks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="invert-colors md:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none">
        <SheetTitle className="hidden">Navigation</SheetTitle>

        <SheetClose asChild>
          <Link href={ROUTES.HOME} className="flex items-center gap-1">
            <Image
              src="/images/site-logo.svg"
              alt="CodeOverFlow Logo"
              width={23}
              height={23}
            />

            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
              Code<span className="primary-text-gradient">OverFlow</span>
            </p>
          </Link>
        </SheetClose>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <section className="flex h-full flex-col gap-4 pt-16">
            <NavLinks isMobileNav />
          </section>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-5 shadow-none">
                  <span className="primary-text-gradient text-sm">Log In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border p-4 shadow-none">
                  <span className="text-sm">Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
