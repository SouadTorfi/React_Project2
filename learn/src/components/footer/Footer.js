import React from "react";
import "./Footer.css";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "@mui/material";

function Footer() {
  return (
    <div>
      <hr></hr>
      <footer className="footer">
        <Typography className="section1-footer">
          <Link href="/aboutus">About Us</Link>
          <Link href="/contactus">Contact Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/tearms">Tearms and Conditions</Link>
          <Link href="/product">Product Pricing</Link>
          <Link href="/legal">Legal Disclaimer</Link>
          <Link href="/participate">Participate responsibly</Link>
        </Typography>
        <Typography variant="span" component="div">
          Coppyright 2022 Arab Billionare. All rights reserved
        </Typography>

        <div>
          <Link href="https://facebook.com/" className="icon">
            <FacebookIcon />
          </Link>
          <Link href="https://instagram.com/" className="icon">
            <InstagramIcon />
          </Link>
          <Link href="https://twitter.com/" className="icon">
            <TwitterIcon />
          </Link>
          <Link href="https://youtube.com/" className="icon">
            <YouTubeIcon />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
