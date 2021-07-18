---
title: "Parallax City"
cover: "https://unsplash.it/400/300/?random?BigTest"
category: "Main"
date: "13/02/2021"
slug: "Parallax City"
tags:
    - design
    - development
---

<!--- NOTE: It's a sunny Saturday morning and I realised I was looking forward to finishing up this two-part article --->

It's about time we revisit our vectorised vintage travel poster. <a href="/vector-travel-poster">In the last article,</a> we discussed vector graphics and how they were well-suited for illustrations consisting of flat colours and simple shapes.

This time, we're going to take the design we recreated and explore an interesting optical illusion called the **'Parallax effect'** by adding dimension to our poster. Here is the original poster design we picked to use as an example.

<div class="book-info">
    <div class="left">
        <h3>Vienna Travel Poster</h3>
        <ul>
            <li>Artist: Kosel, Hermann, 1896-1983</li>
            <li>Created / Published: Austria, [193-]</li>
            <li>Description: 1 print (poster) : lithograph, color ; 93 x 61 cm. | Travel poster shows a view of Vienna.</li>
        </ul>
    </div>
    <img class="cover" src="/Vienna.jpg" alt="Vienna Travel Poster" />
</div>

Before we start exporting assets and diving into code, let's learn a bit more about the effect.

The Parallax effect is also known as Parallax scrolling. Wikipedia describes it as "a technique in computer graphics where background images move past the camera more slowly than foreground images, creating an illusion of depth in a 2D scene of distance."

The technique grew out of the multiplane camera technique used in traditional animation since the 1930s, most famously by Walt Disney Studios in the production of Snow White and the Seven Dwarfs [(here's a fun explainer)](https://youtu.be/YdHTlUGN1zw).

The illusion is used everywhere from film and television, to videogames and websites, and can achieve a wide variety of results depending on how it's implemented. In the same way that vintage travel posters lend themselves well to being vectorised, they are also a good fit for demonstrating the parallax effect.

<div class="note diagram">
    <h3>All about layers</h3>
    <p>
        When we created our vector illustration, we grouped elements together based on how far away they appeared to be, eg. the domes and spires in the distance would be further back, and the statues closer to the front.
    </p>
    <img class="diagram" src="/layer-perspective.png" alt="The poster split into different layers" />
</div>

The grouping of elements mentioned above is very important but it's not an exact science. For this poster design I had to use my imagination in places. If we flatten each of those groups down to single layers, we can save and export them.

You can see what the assets used in this particular design look like here.

<div class="note layers">
    <img class="layer" src="/Vienna-Vector-01.png" alt="The dome is the furthest back" />
    <img class="layer" src="/Vienna-Vector-02.png" alt="Followed by the interior courtyard" />
    <img class="layer" src="/Vienna-Vector-03.png" alt="Then it's the spire and chimneys" />
    <img class="layer" src="/Vienna-Vector-04.png" alt="Followed by the building's roof" />
    <img class="layer" src="/Vienna-Vector-05.png" alt="Then the main building's arches" />
    <img class="layer" src="/Vienna-Vector-06.png" alt="The tree is right in the middle" />
    <img class="layer" src="/Vienna-Vector-07.png" alt="Then the first plinth and column" />
    <img class="layer" src="/Vienna-Vector-08.png" alt="Followed by the first horse" />
    <img class="layer" src="/Vienna-Vector-09.png" alt="Our horse and rider are near the front" />
    <img class="layer" src="/Vienna-Vector-10.png" alt="With the text at the very front" />
</div>

So now we'll try and create a parallax effect by positioning these layers on top of each other and subtly shifting their positions as we scroll. The key to making the effect look convincing is **scrolling the layers at different speeds.**

The topmost layer moves the fastest, but each subsequent layer moves a little slower. You can also use fainter colours to make layers appear further away.

<div class="examples">
    <p class="desktop">Let's take a look at two different examples. One that scrolls, and another that uses your cursor position to move the layers around.</p>
    <p class="touch">Let's take a look at an example. Drag the image up and down to see it in action.</p>
    <div class="parallax__wrapper">
        <div class="frame">
            <img src="/Vienna-Vector-11.png" alt="" />
        </div>
        <div class="parallax scene" id="scene" data-hover-only="true" data-relative-input="true" >
            <div class="parallax__layer parallax__layer__1" data-depth="1.00">
                <img src="/Vienna-Vector-01.png" alt="" />
            </div>
            <div class="parallax__layer parallax__layer__2" data-depth="0.90">
                <img src="/Vienna-Vector-02.png" alt="" />
            </div>
            <div class="parallax__layer parallax__layer__3" data-depth="0.80">
                <img src="/Vienna-Vector-03.png" alt="" />
            </div>
            <div class="parallax__layer parallax__layer__4" data-depth="0.70">
                <img src="/Vienna-Vector-04.png" alt="" />
            </div>
            <div class="parallax__layer parallax__layer__5" data-depth="0.60">
                <img src="/Vienna-Vector-05.png" alt="" />
            </div>
            <div class="parallax__layer parallax__layer__6" data-depth="0.50">
                <img src="/Vienna-Vector-06.png" alt="" />
            </div>
            <div class="parallax__layer parallax__layer__7" data-depth="0.40">
                <img src="/Vienna-Vector-07.png" alt="" />
            </div>
            <div class="parallax__layer parallax__layer__8" data-depth="0.30">
                <img src="/Vienna-Vector-08.png" alt="" />
            </div>
            <div class="parallax__layer parallax__layer__9" data-depth="0.20">
                <img src="/Vienna-Vector-09.png" alt="" />
            </div>
            <div class="parallax__layer parallax__layer__10" data-depth="0.10">
                <img src="/Vienna-Vector-10.png" alt="Scroll to see the effect" />
            </div>
            <div class="parallax__cover">
                <div class="cover-wrapper">
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    </div>
    <div class="parallax-iframe">
        <iframe src="/parallax/examples/hoveronly.html" style="width: 100%; height: 100%; border: none; overflow: hidden;"/>
    </div>
</div>

This is probably the bit where I should explain how the code is set up to achieve the effect.
