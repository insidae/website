---
title: "Bash Profile"
cover: "https://unsplash.it/400/300/?random?BoldMage"
category: "tech"
date: "21/01/2020"
slug: "Bash Profile"
tags:
    - web-dev
---


## This post will be updated over time

Okay, currently my bash_profile is in **serious** need of a refresh. This thing 
has been following me around for **years**, from job to job, and I'm not even 
sure what half of it does anymore. There are some bits I use frequently and 
some bits I've never used, so there's a lot of clean-up required.

I'll try and write notes for each section to make it clear what each line does. 
That way you can cherry-pick the bits that seem useful and ignore the rest. It 
might even be a good idea to include screenshots of output.

***

### bash_profile as of 21/01/2020

```php
    # Open specified files in Sublime Text
    # "s ." will open the current directory in Sublime

    alias s='open -a "Sublime Text"'


    # Color LS

    colorflag="-G"
    alias ls="command ls ${colorflag}"
    alias l="ls -lF ${colorflag}" # all files, in long format
    alias la="ls -laF ${colorflag}" # all files inc dotfiles, in long format
    alias lsd='ls -lF ${colorflag} | grep "^d"' # only directories


    # Quicker navigation

    alias ..="cd .."
    alias ...="cd ../.."
    alias ....="cd ../../.."
    alias .....="cd ../../../.."


    # Enable aliases to be sudo’ed

    alias sudo='sudo '


    # Colored up cat!
    # You must install Pygments first - "sudo easy_install Pygments"

    alias c='pygmentize -O style=monokai -f console256 -g'


    # Git
    # You must install Git first

    alias gs='git status'
    alias ga='git add .'
    alias gc='git commit -m' # requires you to type a commit message
    alias gp='git pull origin master'
    alias grm='git rm $(git ls-files --deleted)'
    alias gl='git log'
    alias gf='git fetch origin master'
    alias gr='git rebase -i origin/master'
    alias vm_up='vagrant resume aos && vagrant resume pcw && vagrant resume postgresql'
    alias vm_down='vagrant suspend aos && vagrant suspend pcw && vagrant suspend postgresql'


    # See memory load

    alias memstat='top -l 1 -o rsize | head -20'


    # See CPU load

    alias cpustat='ps wwaxr -o pid,stat,%cpu,time,command | head -10'

    # See Weather Forecast in London

    alias weather='curl wttr.in/london'

    ############################################################################# Misc

    # Only show the current directory's name in the tab

    export PROMPT_COMMAND='echo -ne "\033]0;${PWD##*/}\007"'


    # init z! (https://github.com/rupa/z)

    # Fill with minuses
    # (this is recalculated every time the prompt is shown in function prompt_command):

    fill="--- "
    reset_style='\[\033[00m\]'
    status_style=$reset_style'\[\033[0;90m\]' # gray color; use 0;37m for lighter color
    prompt_style=$reset_style
    command_style=$reset_style'\[\033[1;29m\]' # bold black


    # Reset color for command output
    # (this one is invoked every time before a command is executed):

    trap 'echo -ne "\033[00m"' DEBUG

    function prompt_command {
        let fillsize=${COLUMNS}-15
        fill=""
        while [ "$fillsize" -gt "0" ]
        do
            fill="-${fill}"
        let fillsize=${fillsize}-1
        done
    }


    ### Prompt Colors
    # Modified version of @gf3’s Sexy Bash Prompt
    # (https://github.com/gf3/dotfiles/tree/v1.0.0)

    if [[ $COLORTERM = gnome-* && $TERM = xterm ]] && infocmp gnome-256color >/dev/null 2>&1; then
        export TERM=gnome-256color
    elif infocmp xterm-256color >/dev/null 2>&1; then
        export TERM=xterm-256color
    fi


    if tput setaf 1 &> /dev/null; then
        tput sgr0
        if [[ $(tput colors) -ge 256 ]] 2>/dev/null; then
            RED=$(tput setaf 9)
            ORANGE=$(tput setaf 172)
            YELLOW=$(tput setaf 185)
            PURPLE=$(tput setaf 140)
        else
            RED=$(tput setaf 5)
            ORANGE=$(tput setaf 4)
            YELLOW=$(tput setaf 2)
            PURPLE=$(tput setaf 1)
        fi
        BOLD=$(tput bold)
        RESET=$(tput sgr0)
    else
        RED="\033[1;31m"
        ORANGE="\033[1;33m"
        YELLOW="\033[0;33m"
        PURPLE="\033[0;35m"
        WHITE="\033[38;5;185m"
        BOLD=""
        RESET="\033[m"
    fi

    export RED
    export ORANGE
    export YELLOW
    export PURPLE
    export WHITE
    export BOLD
    export RESET


    # Git branch details

    function parse_git_dirty() {
        [[ $(git status 2> /dev/null | tail -n1) != *"working directory clean"* ]] && echo ""
    }

    function parse_git_branch() {
        git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/\1$(parse_git_dirty)/"
    }


    # Change this symbol to something sweet.
    # (http://en.wikipedia.org/wiki/Unicode_symbols)

    symbol="⭕️  ❯ "

    export CLICOLOR=1
    export LSCOLORS=GxFxCxDxBxegedabagaced

    export PS1="\[${RED}\]\u \[$RESET\]in \[$YELLOW\]\w\[$RESET\]\$([[ -n \$(git branch 2> /dev/null) ]] && echo \" on \")\[$PURPLE\]\$(parse_git_branch)\[$RESET\]\n$symbol\[$RESET\]""$status_style"'$fill \t\n'"$reset_style"
    export PS2="\[$ORANGE\]→ \[$RESET\]"

    PROMPT_COMMAND=prompt_command

    export PATH="$HOME/.cargo/bin:$PATH"
```