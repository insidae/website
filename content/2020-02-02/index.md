---
title: "My Front-end Development Setup"
cover: "https://unsplash.it/400/300/?random?BigTest"
category: "Main"
date: 2020-02-02
slug: "My Front-end Development Setup"
tags:
    - design
    - thoughts
    - development
---


![My desk in February, 2019](/Desk-17-03-2020.jpg)


I'm a designer and self-taught web developer who has been working professionally in the field since June, 2014. I'm going to write about the programs, and tools I use on a daily basis with some brief descriptions and alternate options.

I'll try and update this post as my setup changes.

<div class="note">
    <h3>Disclaimer</h3>
    <p>
        It doesn't really matter what you use: Windows or Mac. Vim or Emacs. Tabs or spaces. Sass or LESS. If all the options didn't have merit, there wouldn't be an argument. This list is not meant to be an endorsement for or against anything, just one person's web development workflow.
    </p>
    <p>
        Try new things. Be open minded. Research. Discover what works best for you. Also, this is not an extensive list; this is my list.
    </p>
</div>

***

## Text Editor / IDE

> "The program used to write code and edit text files."

### **I use:** [Visual Studio Code / VS Code](http://code.visualstudio.com/)

**Other Options:** [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), [Brackets](http://brackets.io/)

I personally started out with the default text editors on Mac and Windows (TextEdit and Notepad respectively), then briefly used TextMate on Mac where I discovered the benefits of syntax-highlighting for the first time. After that I used Sublime Text on both platforms for several years and enjoyed plugins and extensions through Package Control.

Then it seemed as though Atom and VS Code came along at the same time and offered a sleek modern experience focused on writing code. Both are well-loved by the web development communities but I opted for VS Code and haven't looked back. I don't currently use an Integrated Development Environment (IDE) but I've been itching to try [Coda](https://panic.com/coda/) for years (I hear the developers are working on a successor called [Nova](https://panic.com/nova/).)

### Extensions

All extensions are installed by going to `File > Preferences > Extensions`.

- [Beautify](https://github.com/brackets-beautify/brackets-beautify) - formatting and indentation for files.
- [ESLint](https://github.com/Microsoft/vscode-eslint) - integrates ESLint JavaScript into VS Code.
- [Dank Neon](https://github.com/DankNeon/vscode) - a neon-inspired theme I enjoy.

***

## Version Control Hosting

> "The Git repository hosting service used for keeping track of revisions and collaboration."

### **I use:** [GitHub](https://github.com/)

**Other Options:** [BitBucket](https://bitbucket.org), [GitLab](https://about.gitlab.com/), [AWS CodeCommit](https://aws.amazon.com/codecommit/)

GitHub is easily the most well-known place to host public and private Git repositories. Depending on what you want to do with private repositories, other options might be better or cheaper. GitHub doubles as a web development portfolio and is frequently used by people in the web development industry to connect and scout other developers.

***

## CSS Preprocessor

> "Extends the features of CSS and compiles it back into CSS."

### **I use:** [Sass](http://sass-lang.com/)

**Other Options:** [LESS](http://lesscss.org/), [Stylus](http://stylus-lang.com/)

A preprocessor is a program that takes a bit of code and compiles it into a different bit of code. In the case of CSS preprocessors, we’re compiling the Sass language into regular old CSS that the browser can interpret. I like having the ability to define variables, nest, create loops, and organize my project into multiple files, all of which and more I can do with Sass, specifically the `.scss` extension. I started with LESS, but as Sass grew in popularity, I switched over and now prefer it.

***

## Transfer Application

> "Helps upload, download, and manage files across multiple servers."

### **I use:** [Transmit](https://panic.com/transmit/)

**Other Options:** [Cyberduck](https://cyberduck.io/), [FileZilla](https://filezilla-project.org/)

If you're making anything available online, it involves uploading things to servers. Whether that's photos, videos, text, web pages, or applications, it means moving files onto servers. To make that as easy as possible, we rely on applications (or web interfaces) to transfer those files across. My personal favourite is an app called Transmit (made by the same team behind Nova, Panic Software). It's only available on Mac but is far and away the best application when you need to manage files online.
