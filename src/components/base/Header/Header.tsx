import Button from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  console.log("router", router.query.name);
  return (
    <div className="header">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src="/images/logo.svg" alt="image" width={151} height={38} />
        </Link>
        <div className="flex">
          <Button
            name={"Contact us"}
            customClass="shadow-none md:block hidden"
          />
          <Link href="/quiz">
            <Button name={"Find A Therapist"} type={"secondaryBtn"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
