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

Several months have passed since I last wrote about the home server. It's been running smoothly for a while now but that hasn't stopped me from tinkering.

This second part was supposed to focus on the software side of things, but the opportunity to make a few more hardware upgrades was hard to pass up.

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

Almost immediately after finishing that last article, I discovered that my first ever graphics card was compatible with the Mac Pro 3,1. It's an old [Nvidia GTX 670](https://www.amazon.co.uk/Palit-GeForce-Graphics-Architecture-Surround/dp/B00822ZZS0) which launched in May 2012, but it's also twice as powerful as the one that came with the server so it makes sense.

Unfortunately you can't just plug a new graphics card in and expect it to work. A GPU is often quite a power-hungry component and usually requires more wattage than can be provided through a standard PCIE slot. This is normally solved by running an extra power cable from the power supply, but the power supply here is not a modular unit and doesn't have any spare cables.

> "Building a PC would have been much easier."

So then, how are you able to install a graphics card inside a Mac Pro 3,1 in the first place? As it happens, Apple designed some special mini 6-pin connectors on the motherboard that you can run power cables from. Neat.

So I found the correct cable, a [Small 6 Pin to PCI-E 6PIN Graphics Video Card Power Cable](https://www.amazon.co.uk/BGNing-Small-Graphics-Video-Connector/dp/B07MCTCF79) (about £5.99 online), and then had to wait several weeks for it to be shipped from China. But it eventually arrived and we were good to go. You can see I actually needed two of them.

![My old GTX 670 graphics card](/GTX-670.jpg)

I also said I was planning on upgrading the hard drives and migrating the media server across, so I found myself buying a couple of these [14TB IronWolf Pro Hard Drives](https://www.amazon.co.uk/gp/product/B07GTGDZP8/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1) from Seagate. I've been using these drives for several years now and haven't had any issues so far. I'd really like at least four of them so I can create a proper RAID array (with a parity drive) but can't justify spending so much money on hard drives just yet. With two drives, I'll be using RAID 0.

![One of the new 14TB Seagate IronWolf Pro drives](/HDD.jpg)

Ask anyone about RAID arrays and they'll tell you no amount of redundancy is a proper substitute for off-site backups, but purchasing another couple of drives to create an array with more redundancy is a priority. Until then, creating a RAID 0 array give us over 25TB of usable storage. Plenty for the time being.

The last hardware upgrade I wanted to make to the server was adding some modern I/O, so that transferring files over USB could be done much faster. Installing a [4-port USB 3.2 card](https://www.amazon.co.uk/gp/product/B00GRGCV2G/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1) by Sonnet (about £62.00 online) provides some much needed, much faster ports for use on the back of the server.

![The Sonnet Allegro PCI-e card](/USB.jpg)

---

## Up and Running

Installing the new components leaves us with an extremely capable home server. While, it's true, the clock speeds aren't exactly high by today's standards, but with eight Xeon cores and 32GB of fully-buffered ECC RAM, it can hold its own. We even have a spare 4x PCIE slot left over for any future upgrades.

![The new components installed inside the server](/PCIE.jpg)

A typical server can generate a lot of heat and will have powerful fans circulating air to cool the components. These are often very loud and not something you want sat next to you when you're working. The 2008 Mac Pro isn't too bad, but I did want to keep it somewhere out of the way.

Luckily, we have a very handy utility closet in our home that happens to have ventilation, wall sockets, and ethernet ports, so that's where the home server has been living. I did have some initial concerns about airflow and thermals but after monitoring the server for a month, I'm happy it's running cool and quiet.

My primary goals for this machine were to serve media, transcode Plex streams, and backup the myriad devices at home. So how exactly does it manage?

---

### Getting Things Done

Before you can get started sharing files, hosting backups, or streaming media, you have to decide on an operating system. In 2020 there are more options than ever before, including the familiar Windows and Mac environments.

> "Don't forget Linux."

But two of the more interesting and popular options are [Unraid](https://unraid.net/) and [FreeNAS](https://www.freenas.org/). They're both enterprise-class, software-defined, storage solutions. Unraid is a paid solution (but does have a 30 day free trial) whereas FreeNAS is free to use. Both are well-supported and have helpful online communities. Either would be a good fit for me but I opted to try FreeNAS out this time.

**Update:** FreeNAS is now TrueNAS CORE. Read more about it [here](https://www.truenas.com/truenas-core/).

Full disclosure, I went down a pretty deep rabbit hole and I'm still not convinced I reached the bottom. To begin with, the 2008 Mac Pro is definitely not on the official list of supported hardware for FreeNAS. That was my first red flag.

Trying to install from a flash drive got me as far as the initial splash screen but no further. Considering Macs are EFI and don't have a BIOS, there was very little I could do to troubleshoot. I spent several hours researching without any luck before deciding to try and install [ESXi](https://www.vmware.com/uk/products/esxi-and-esx.html) (a bare-metal hypervisor). This would, in theory, install directly onto the physical hardware with direct control of underlying resources, bypassing any issues with EFI.

> "If something sounds too good to be true..."

Of course, none of the recent versions would run on my 2008 hardware, but I **was** able to find the last version that had supported my old system; [5.1.0](https://kb.vmware.com/s/article/2145103) (sadly no longer officially maintained by VMware).

I encountered more problems trying to install from a flash drive but found mention of someone else who succeeded using a disc, so I tried burning the .iso to a DVD. Miraculously, it worked and ESXi 5.1.0 was running on the Mac Pro.

![We had to go all the way back to version 5.1.0](/ESXi.jpg)

After that, I was finally able to install FreeNAS, but with some caveats:

1) Still no luck installing from a flash drive. Needed another DVD disc.

2) Even then, I was stuck using an older version (FreeNAS-11.3-U2.1).


![Photographic evidence of FreeNAS running on a 2008 Mac Pro](/FreeNAS.jpg)

Regardless, I was surprised to get it working at all. But I had to use some workarounds and my particular installation (dependent on so much out-of-date software) didn't feel reliable enough to trust all my media to. For now, seeing as my server is a Mac Pro, I've opted to keep things simple and run MacOS.

But nothing's ever simple when you're committed to using old hardware.

The latest version of MacOS that officially runs on the 2008 Mac Pro is 10.11.6 (El Capitan, released in September, 2015). Thankfully there's the [MacOS Catalina Patcher](http://dosdude1.com/catalina/) by dosDude1 which (at the time of writing) allows you to install the latest version of MacOS.

**Update:** Apple have since released Big Sur. Read more about it [here](https://www.apple.com/uk/macos/big-sur/).

I run the server headless now (with no display attached) so I don't even need to leave my desk to check in on it. I just remote in to the server from whichever machine I'm currently sat in front of and have full access.


![Remote connection to the home server](/Server-Screen.jpg)

It's so convenient, being able to schedule backups and spin up anything from a Minecraft server to a Discord chat bot on the fly. Knowing it's all running on my own hardware gives me peace of mind. It also gives me an opportunity to learn more about network security (while everything is still quite low-stakes).

But how does it **handle** running a minecraft server?

> "The dual Xeons and GTX 670 make for a very smooth Minecraft server."

We've only had about four simultaneous connections so far, but the experience has been smooth for all involved. Having it running 24/7 keeps things interesting too. Friends occasionally logging in and playing while I'm not around means I never quite know what to expect when I check back in.

![Exploring our Minecraft server](/Minecraft-Server.jpg)

The main reason I wanted 28TB of storage though, was for hosting my media server. I've been building a collection of films, TV boxsets, and albums for years. Since before Netflix and Spotify even existed. As of the time of writing, it's sitting at about 22TB and still growing.

It's only in recent years that I've discovered [PLEX](https://www.plex.tv/en-gb/) and have started using it exclusively to help me curate my collection. Running PLEX on the home server allows us to access our media from anywhere and does an excellent job of organising it all for easy browsing.

![Browsing our music library on an iPad](/Plex-Music.PNG)

I particularly like the interfaces on both the Apple TV and iPad apps. With music specifically, this includes everything from listing an artist's 'Popular Tracks' to suggesting 'Similar Artists' from elsewhere in my collection (functionality I really loved when I used Spotify).

![Viewing our favourite media is a snap](/Plex-Artist.PNG)

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
