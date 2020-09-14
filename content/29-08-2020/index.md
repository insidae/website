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

<!--- NOTE: These journal entries are still being written during the COVID-19 pandemic --->

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

Almost immediately after finishing that last article, I discovered that my first ever graphics card was compatible with the Mac Pro 3,1. It's an old [GTX 670](https://www.amazon.co.uk/Palit-GeForce-Graphics-Architecture-Surround/dp/B00822ZZS0) so... not exactly current, but it's twice as powerful as the one already in the server.

There was only one problem. You can't just plug a new graphics card into the Mac Pro 3,1 power supply. It's sealed shut. You're supposed to use the special mini 6-pin connectors on the motherboard.

So I found the correct cable, a [Small 6 Pin to PCI-E 6PIN Graphics Video Card Power Cable](https://www.amazon.co.uk/BGNing-Small-Graphics-Video-Connector/dp/B07MCTCF79), and then had to wait weeks for it to be shipped from China but... it eventually arrived and we were good to go! You can see I needed two of them.

![Mac Pro 3,1 after being cleaned and upgraded](/GTX-670.jpg)

I also said I was planning on upgrading the hard drives and migrating the media server across, so I found myself buying a few of these [14TB IronWolf Pro Hard Drives](https://www.amazon.co.uk/gp/product/B07GTGDZP8/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1) from Seagate. I'd like to double them up and create a proper RAID array but couldn't quite justify spending so much money on hard drives just yet.

![Mac Pro 3,1 after being cleaned and upgraded](/HDD.jpg)

For now, we're having to live dangerously with only partial backups. Purchasing another few drives and fixing this in the near future is a fairly high priority. Until then, two of these drives gives us over 25TB of usable storage. Plenty for now.

---

## Up and Running

Installing the new components leaves us with an extremely capable home server. Now, it's true, the clock speeds aren't exactly high by today's standards, but with eight Xeon cores and 32GB of fully-buffered ECC RAM, it can hold its own.

![Mac Pro 3,1 after being cleaned and upgraded](/Home-Server-Interior.jpg)

A typical server can generate a lot of heat and will have powerful fans circulating air to cool the components. These are often very loud and not something you want sat next to you when you're working. The 2008 Mac Pro isn't too bad, but I did want to keep it somewhere out of the way.

Luckily, we have a very handy utility closet in our home that happens to have ventilation, wall sockets and ethernet ports, so that's where the home server has been living. I did have some initial concerns about airflow and thermals but after monitoring the server for a month, I'm happy it's not overheating.

![Mac Pro 3,1 after being cleaned and upgraded](/Home-Server-Closet.jpg)

My primary goals for this machine were to serve media, transcode Plex streams, and backup the myriad devices at home. So how exactly does it manage?

---

### Getting Things Done

Before you can get started sharing files, hosting backups, or streaming media, you have to decide on an operating system. In 2020 there are more options than ever before, including the familiar Windows and Mac environments.

Two of the more interesting and popular options though are [Unraid](https://unraid.net/) and [FreeNAS](https://www.freenas.org/) (but I'll talk more about them in a future post). For now, seeing as my server is a Mac Pro, I've opted to run MacOS.

I experimented with FreeNAS first and did actually succeed in getting it running on this old Apple hardware from 2008 (definitely not on the list of supported hardware) but I had to use some workarounds and my particular installation didn't feel reliable enough to trust all my media to.

I run the server headless now (with no display attached) so I don't even need to leave my desk to check in on it. I just remote in to the server from whichever machine I'm currently sat in front of and have full access.


![Mac Pro 3,1 after being cleaned and upgraded](/Server-Screen.JPG)

It's so convenient, being able to schedule backups and spin up anything from a Minecraft server to a Discord chat bot on the fly. Knowing it's all running on my own hardware gives me peace of mind. It also gives me an opportunity to learn more about network security (while everything is still quite low-stakes).

> "The dual Xeons and GTX 670 make for a very smooth Minecraft server."

We've only had about four simultaneous connections so far, but having it running 24/7 keeps things interesting. Friends occasionally logging in and playing while I'm not around means I never quite know what to expect when I check back in (see the haunted ruins below).

![Mac Pro 3,1 after being cleaned and upgraded](/Minecraft-Server.jpg)

The main reason I wanted 25TB of storage though, was for hosting my media server. I've been building a collection of films, television shows, and music since before Netflix and Spotify existed. Over the years it's grown to be massive.

It's only in recent years though that I discovered [PLEX](https://www.plex.tv/en-gb/) and began to use it exclusively to help me curate my collection. Running PLEX on the home server allows us to access our media from anywhere and does an excellent job of organising it all for easy browsing.

![Mac Pro 3,1 after being cleaned and upgraded](/Plex-Library.PNG)

I feel like PLEX does a particularly good job of helping me browse my favourite content. With music specifically, this includes everything from listing an artist's 'Popular Tracks' to suggesting 'Similar Artists' from elsewhere in my collection.

![Mac Pro 3,1 after being cleaned and upgraded](/Plex-Artist.PNG)

For the time being, there's nothing more I could ask of a home server, but I'm sure I'll work towards a proper FreeNAS installation in the future. I suspect my twelve-year-old hardware isn't getting any younger, and I'd like to rest easy knowing my data is stored on a redundant array before disaster strikes.

<div class="note illustration">
    <h3>The Current Specs</h3>
    <p>
        So, until I can expand on the amount of storage once again, this is where the home server currently stands;
    </p>
    <ul>
        <li>2 x 2.8 GHz Quad-Core Intel Xeon</li>
        <li>32 GB 800 MHz DDR2 FB-DIMM</li>
        <li>Palit Nvidia GTX 670 2048 MB</li>
        <li>500GB SSD (via PCIE mount)</li>
        <li>28TB RAID 0 Array</li>
    </ul>
    <img class="illustration" src="/icons/server.svg" alt="server illustration" />
</div>
