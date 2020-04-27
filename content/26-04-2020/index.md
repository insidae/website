---
title: "Vector Travel Poster"
cover: "https://unsplash.it/400/300/?random?BigTest"
category: "Main"
date: "26/04/2020"
slug: "Vector Travel Poster"
tags:
    - design
    - thoughts
---

<!--- NOTE: Still in quarantine due to COVID-19. I've been wanting to write this post for years. --->

There's a list of topics I wanted to cover in this journal and working with vector graphics is an interesting one. So today we'll take a look at what exactly vector graphics are and why they're such an important tool for web developers.

As it happens, I've been looking for an excuse to practice illustrating something vector-based for a while, and there's a subject near and dear to my heart that would be a perfect fit for this... Vintage travel posters.

<div class="note posters">
    <img class="poster" src="/Austria.jpg" alt="Holidays in Austria" />
    <img class="poster" src="/India.jpg" alt="See India" />
    <img class="poster" src="/Germany.jpg" alt="Motoring in Germany" />
    <img class="poster" src="/Vienna.jpg" alt="Vienna" />
    <img class="poster" src="/Canada.jpg" alt="Lovely Lake Louise" />
    <img class="poster" src="/Japan.jpg" alt="Japan" />
    <img class="poster" src="/Rome.jpg" alt="Rome" />
    <img class="poster" src="/Penzance.jpg" alt="Penzance" />
</div>

> "Vintage travel posters, especially those from the 1910's and 20's, are absolutely beautiful."

They're visually dynamic and evoke a more romantic, adventurous sense of travel than we know today. They also have a few interesting design choices in common.

Namely, a limited colour palette and a strong perspective. Many of them use simplified shapes and flat colours too, and it's these reasons that make them well-suited for design using vector graphics.

So, what is a vector graphic?

---

## Vector Graphics

Wikipedia says;&nbsp;&nbsp; 
**"Vector graphics are computer graphics images that are defined in terms of 2D points, which are connected by lines and curves to form polygons and other shapes."**

In layman's terms, **vector graphics are images made out of maths instead of pixels.** Like drawing a square using four coordinates rather than lots of smaller squares. There are advantages and disadvantages to using them.

Because they're not made out of pixels, you can scale them infinitely and they will stay crisp and sharp (no blurry pixelated mess like in the screenshot below). For this reason, they're referred to as **SVGs**, or scalable vector graphics when talking about them in regards to web development.

<div class="screenshot">
    <img src="/pixelated.png" alt="A screenshot showing the difference between a shape, one a bitmap, the other a vector" />
</div>

Also, because an SVG is made up of coordinates instead of pixels, they are often much smaller in filesize compared to bitmap images. The main disadvantage to SVGs is their inability to render smooth gradients or lots of tiny details very easily. That's why photos are never rendered using vector graphics.

However they **are** very well suited for things such as icons or simple illustrations.

Which brings us to our vintage travel poster:

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

This travel poster for Vienna is an ideal example of the type of design that translates really well to a vector illustration. It has clear contrasting lines, flat colours, and a relatively small amount of detail.

What's even more useful is that we can clearly make out which elements are sat in front of each other. This might not sound like much, but it means we can deconstruct the image and play with the perspective using an effect called parallax (but we'll save that for another time).

For now, let's get started turning this vintage poster design into a nice clean vector illustration.

---

## Creating SVGs

There are many different ways to work with vector graphics, [Adobe Illustrator](https://www.adobe.com/products/illustrator.html) being a well-known example, but my preferred tool is an app called [Sketch](https://www.sketch.com/). It's only available for Mac but has a lot of incredible features and is especially useful when designing UI or prototyping software.

For a project like this, I can use the original poster design as a template to draw shapes over the top of. This ensures my vectorised version is as accurate as possible. So let's start by importing the original poster into Sketch.

<div class="screenshot">
    <img src="/beginning.png" alt="A screenshot showing the original travel poster in Sketch" />
</div>

The very first shape we're going to recreate is the large dome. This is because it's the object furthest back and doesn't sit in front of any other elements.

<div class="screenshot">
    <img src="/first-shape.png" alt="A screenshot showing the first shape drawn on top of the poster" />
</div>

As we recreate individual elements of the design using simple shapes, we can see the picture starting to appear. Keep working forwards from the back.

<div class="screenshot">
    <img src="/simple-shapes.png" alt="A screenshot showing several different shapes starting to resemble the original poster" />
</div>

More complicated shapes take longer to draw but just keep plotting your points around the outline of the shape and eventually you'll have another element.

<div class="screenshot">
    <img src="/horse.png" alt="A screenshot showing the detailed horse and rider shape" />
</div>

You can see just how many coordinate points this horse and rider have. The lighter blue highlights on the figure are separate vector shapes too!

<div class="screenshot">
    <img src="/horse-outline.png" alt="A screenshot showing how many points and coordinates make up the horse and rider" />
</div>

You can see how a more complicated illustration would take a long time to create using vector graphics. That's partly the reason I've opted to use this vintage travel poster as an example here.

Once finished, we have a nicely crisp and sharp recreation of the original design!

<div class="screenshot">
    <img src="/vienna-vector.png" alt="The final vector version of the Vienna travel poster" />
</div>

<div class="note diagram">
    <h3>Layers</h3>
    <p>
        We can split this design into layers by estimating how distant each element is from the viewers' perspective. Apart from being a neat way to organise our work, we can use these later to create an interesting visual effect.
    </p>
    <img class="diagram" src="/Vienna-Layers-Perspective.png" alt="The poster split into different layers" />
</div>

We now have a vectorised version of the Vienna travel poster that can scale infinitely without losing definition. I'll revisit this in a future article and use the individual layers to create a sense of depth by utilising the parallax effect.

A link to that article will be here once it's available.