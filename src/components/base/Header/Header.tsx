import Button from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container flex justify-between items-center">
        <Image src="/images/logo.svg" alt="image" width={151} height={38} />
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
