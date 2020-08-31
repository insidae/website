---
title: "Home Server - Part Two"
cover: "https://unsplash.it/400/300/?random?BigTest"
category: "Main"
date: "29/08/2020"
slug: "Home Server - Part Two"
tags:
    - design
    - thoughts
    - development
---

<!--- NOTE: This journal entry is being written during quarantine for the COVID-19 pandemic --->

Several months have passed since I last wrote about the home server. It's been running smoothly for a while now but I've been having lots of fun tinkering.

<div class="note illustration">
    <h3>So where were we?</h3>
    <p>
        <a href="/home-server-part-one">Previously</a>, I'd managed to find an old Mac Pro 3,1 to repurpose as a home server. Minor upgrades left us here;
    </p>
    <ul>
        <li>2 x 2.8 GHz Quad-Core Intel Xeon</li>
        <li>32 GB 800 MHz DDR2 FB-DIMM</li>
        <li>ATI Radeon HD 5770 1024 MB</li>
        <li>500GB SSD (via PCIE mount)</li>
        <li>1TB RAID 1+0 Array</li>
    </ul>
    <img class="illustration" src="/icons/server.svg" alt="server illustration" />
</div>

Almost immediately after finishing that last article, I discovered that my first ever graphics card was compatible with the Mac Pro 3,1. It's an old GTX 670 so... not exactly current, but it's twice as powerful as the one already in the server.

There was only one problem. You can't just plug a new PCIE component into the Mac Pro 3,1 power supply. It's sealed shut. You're supposed to use the special mini 6-pin connectors on the motherboard.

So I found the correct cable, a [Small 6 Pin to PCI-E 6PIN Graphics Video Card Power Cable](https://www.amazon.co.uk/BGNing-Small-Graphics-Video-Connector/dp/B07MCTCF79), and then had to wait weeks for it to be shipped from China but... it eventually arrived and we were good to go!

![Mac Pro 3,1 after being cleaned and upgraded](/GTX-670.jpg)

I also said I was planning on upgrading the hard drives and migrating the media server across, so I found myself buying a few of these [14TB IronWolf Pro Hard Drives](https://www.amazon.co.uk/gp/product/B07GTGDZP8/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1) from Seagate. I'd like to double them up and create a redundant RAID array but couldn't quite justify spending so much money on hard drives just yet.

![Mac Pro 3,1 after being cleaned and upgraded](/HDD.jpg)

For now, we're having to live dangerously with only partial backups. Puchasing another few drives and fixing this in the near future is a fairly high priority.

---

## Up and Running

Installing the new components leaves us with an extremely capable home server. Now, it's true, the clock speeds aren't exactly high by todays standards, but with eight Xeon cores and 32GB of fully-buffered ECC RAM, it can hold it's own.

![Mac Pro 3,1 after being cleaned and upgraded](/Home-Server-Interior.jpg)

A typical server can run quite hot and quite loud. Not something you want next to you. This one isn't too bad, but I did want to keep it somewhere out of the way.

Luckily, we have a very handy utility closet in our home that just so happens to have wall sockets and ethernet ports so that's where the home server has been living. I did have some initial concerns about airflow and thermals but after monitoring the server for a month, I was happy it wasn't overheating.

![Mac Pro 3,1 after being cleaned and upgraded](/Home-Server-Closet.jpg)

My primary goals for this machine were to serve media, transcode Plex streams, and backup the myriad devices at home. So how exactly does it manage?

---

### Getting Things Done

Write about software here


![Mac Pro 3,1 after being cleaned and upgraded](/Server-Screen.JPG)

Mention how convenient it is to manage the server remotely.

> "Quote explaining how pleasantly surprised I've been with performance."

Minecraft

![Mac Pro 3,1 after being cleaned and upgraded](/Minecraft-Server.jpg)

Plex Media Server

![Mac Pro 3,1 after being cleaned and upgraded](/Plex-Library.PNG)

![Mac Pro 3,1 after being cleaned and upgraded](/Plex-Artist.PNG)
