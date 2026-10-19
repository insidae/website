---
title: "Digital Pet"
cover: "https://unsplash.it/400/300/?random?BigTest"
category: "Main"
date: 2025-07-24
slug: "Digital Pet"
tags:
    - design
    - development
---


It's been a while since I last updated the website. While writing articles here *isn't* my highest priority, I *have* been feeling a little guilty... just not quite guilty enough to **do** anything about it. So how about we try and fix that?

As it happens, I've thought of an excellent way of encouraging myself to write more often. Using a unique form of manufactured digital guilt... one with a proven track record.

<img class="illustration" src="/IMG_0965.jpg" alt="I have a long history with this digivice" />

> "TLDR: I'm going to put a digital pet on my website. "

*A digital pet that feeds on articles.* Without new articles, it'll get angry, then sick, before eventually dying and making me feel **incredibly** guilty. It's emotional blackmail to the rescue. An elegant solution, from a more civilised age.

<div class="book-info">
    <div class="left">
        <h3>So, like a Tamagotchi?</h3>
        <p>
            Not quite. While <a href="https://en.wikipedia.org/wiki/Tamagotchi">Tamagotchi</a>, released by <a href="https://en.wikipedia.org/wiki/Bandai">Bandai</a> in 1996, was one of the first handheld virtual pets, they were only available in Japan to begin with.
        </p>
        <p>
            They launched worldwide the following year alongside <i>another</i> product designed by Bandai. This one, intended as a more <i>'masculine'</i> counterpart to Tamagotchi.
        </p>
        <p>
            As a 7-year old boy, this was obviously the one that caught my attention. That product was <a href="https://en.wikipedia.org/wiki/Digimon">Digimon</a>.
        </p>
    </div>
    <img class="cover" src="/Digivice.png" alt="Your digimon lived on your Digivice" />
</div>

A bit of backstory: I grew up in the 90's so my childhood was absolutely dominated by Pokemon.

But while I **did** really enjoy playing the Pokemon games and collecting the trading cards, I was one of the kids who secretly preferred Digimon. The TV show was better and I liked that it featured protagonists from **our** world travelling to another world (a trope commonly known these days as [Isekai](https://en.wikipedia.org/wiki/Isekai)).

I found it more relatable. The 'digital' world was well-designed and full of interesting liminal details but the story really ramped up when the cast of characters returned with their digimon to Japan, in the 'real' world.

It left such an impression on me that, when I finally travelled to Japan 25 years later, I took some time to visit a few of the locations featured in the show (one of the more memorable scenes features the Fuji TV station building in Odaiba).

I was surprised to learn that the giant spherical section is actually an observatory. I was even more surprised to find out that it's open to the public. The view is incredible, featuring a wide panorama looking out over Tokyo bay.

<img class="illustration" src="/Fuji-TV-Station-Odaiba-Digimon.jpg" alt="Fuji TV station in the show" />

<img class="illustration" src="/Fuji-TV-Station-Odaiba.jpg" alt="Fuji TV station in real life" />

Of course, I took my original digital pet with me. I had to.

Which brings us back to the task at hand. How do I put a digital pet on this website in a way that encourages me to write articles more frequently?

---

### Creating Digital Life

For the idea to work as intended, I have to actually **care** what happens to the poor thing. The best way of achieving that is to make the digital pet as faithful to my childhood experience as possible. That means working with some of the same constraints as the original creators.

> "We've come a long way since the 90's."

Newer models of these handheld devices (still being made today) have high resolution screens capable of displaying full colour digimon but the one I had as a kid was rendered as a **16 by 16 pixel sprite on a monochrome LCD display.**

That's what we're aiming to recreate.

<div class="book-info">
    <div class="left">
        <h3>That's not many pixels...</h3>
        <p>
            Yeah. That's an understatement.
        </p>
        <p>
            The original artists and designers who worked on these sprites were miracle workers. The fact you can even <i>discern</i> the condition of your digimon at this scale is nothing short of amazing.
        </p>
        <p>
            There <i>was</i> an accompanying animation for each status but they were usually only two frames.
        </p>
    </div>
    <img class="cover" src="/Static-Digipet.gif" alt="This little guy was always hungry" />
</div>

It's those *status conditions* I'm interested in. They're the gameplay element that encourage you to care for your digimon and keep it happy. So... what kind of status conditions do we need to account for?

A lot like a real pet. You have to feed it, train it, and clean up after it. If you don't, your digimon will show its displeasure before getting sick and, ultimately, dying.

<img class="full-width" src="/Digipet-Sprites.gif" alt="Some of the sprites involved in animating the digital pet" />

On the original handheld devices these interactions are done by simply pressing a button. But we don't want an easy solution like that. The interaction we *want* to encourage is writing and uploading new articles.

My thinking is that if we recreate a selection of animated digital sprites for each status condition, all we have to do is display the relevant one on my homepage depending on how long it's been since the latest article was uploaded.

Simple stuff.

---

### Let's get digital

First things first, let's create the animated sprites for each status condition. Two states would be the bare minimum, either alive or dead. But if the goal is **maximum guilt**, we need to try and convey some personality.

To achieve that, I've decided on five distinct states that will each be assigned to a certain milestone after an article is posted. The milestones can be adjusted but I think one article every three months is a good target for now.

<img class="full-width-mobile" src="/Digipet-Status-01.gif" alt="Happy" />
<br />
<img class="full-width-mobile" src="/Digipet-Status-02.gif" alt="Fine" />
<br />
<img class="full-width-mobile" src="/Digipet-Status-03.gif" alt="Upset" />
<br />
<img class="full-width-mobile" src="/Digipet-Status-04.gif" alt="Unwell" />
<br />
<img class="full-width-mobile" src="/Digipet-Status-05.gif" alt="Dead" />

---

But there's no guarantee any of this will actually help. Right?

Nothing's ever guaranteed, no. Still...

I have a feeling it might just work.

<img class="illustration" src="/IMG_0961.jpg" alt="Digidestined" />
