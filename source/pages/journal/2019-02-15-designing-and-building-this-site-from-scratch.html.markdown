---
layout: "article_layout"
title: Designing and building this site from scratch
date: 2019-02-15
tags: design, development, guides
---

<p>First post! Join me as I deliberate, design, and finally code the very site upon which you’re reading these words...</p>

<i>ARTICLE IN PROGRESS</i>

<img class="article_image" src="/pages/journal/journal_assets/Desk_in_March_2019.jpg" />

<p>
    As a web-developer, it makes sense that I'd have a website. What form a personal website takes though can vary massively depending on the needs of the individual. Plenty of people opt for the single-page 'brief introduction and contact details' type, others for the no-nonsense 'portfolio' variety. Some of my favourite web developers though, maintain a blog. They write guides, tutorials, updates on their recent discoveries. I've benefited massively from these articles over the years and as such, would like to write my own. So when I bought this domain a few years ago, I thought about what I'd like to use it for.
</p>
<p>
    Personal promotion was the obvious goal, but giving back to the community seemed a worthwhile secondary ambition, so I began to research modern blogging platforms. My initial research turned up the obvious solutions;
    Content management systems (CMS's like Wordpress and Drupal), and static-site Generators. I narrowed down my options to Hugo, Jekyll, and Middleman. Ultimately I went with Middleman due to familiarity.
    I didn't want to have to manage a database, or worry about installing security updates. I also wanted the flexability to use my preferred tools, namely SASS and Font Awesome.
</p>
<p>
    Then began the design phase. I gathered a variety of features I liked from other, similar, platforms and then started to work them into page layouts. UX was a priority from the beginning. I wanted the site to be intuitive, even for first-time visitors, and what better platform for demonstrating UX/UI know-how than on my own personal website. SKETCH would normally be my UI tool of choice, but I had some archived designs for a personal website that had been created in Photoshop, so I started from there.
</p>
<p>
    As this was an exercise in crafting my 'personal brand', I looked back through my 'inspiration' folder to try and identify common themes, colour-combinations, design elements I often collected. I also drew inspiration from the tools and conventions I use in my line of work, namely text-editors (light text on dark backgrounds) and colours as observed in the browser (RGB). I settled on MontSerrat as my font-choice and took full advantage of it being served as a Google Font to utilise it in my design.
</p>
<p>
    Some elements I really like from other blogs include the 'progress' bar when reading longer articles, highlighted-syntax in code snippets, and relevant images when discussing visual components.
</p>
<p>
    Deciding on a tech-stack was made much easier by prioritising how I wanted to add content. Easily and without over-complicating things. Using a static-site generator was an obvious choice for me perosnally, the tricky bit was figuring out which one to go with. Jekyll, Hugo, Middleman all have their pros and cons...
    I wanted to use SASS. and I wanted the flexibility to adapt my folder structure if I wanted to make sweeping changes in the future.
</p>
<p>
    As far as site structure goes, I didn't want a single-page site or a complicated mess of URLs and partials. I knew what pages I wanted and roughly how much content would go on each one.
    Using variables in SASS for colours and key measurements was an investment in saving time further down the line (in case of thematic changes) and using partials for common elements like headers and footers just makes sense. In the same vein, middleman-blog uses 'frontmatter' as a clever way of grouping metadata such as dates, tags, and even layouts in a convenient (and easy to change) location at the top of each article.
</p>
