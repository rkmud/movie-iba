import React from "react";
import { WrapperFooter, Icons } from "./styled";
import { Typography, SvgIcon, Link } from "@mui/material";
import { socialMedia } from "./config";

export function Footer() {
  return (
    <WrapperFooter>
      <Typography variant="body1" color="action">© 2003 — 2024, MOVIE</Typography>
      <Icons>
        {socialMedia.map(item => (
          <Link href={item.link} color="inherit" target="_blank">
            <SvgIcon component={item.icon} color="action" />
          </Link>
        ))}
      </Icons>
    </WrapperFooter>
  );
}