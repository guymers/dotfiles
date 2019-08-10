# ~/.bashrc

TERM=xterm-color

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

source .bash_aliases

PS1='[\u@\h:\W]\$ '

# Set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
  xterm-color) color_prompt=yes;;
esac

if [ "$color_prompt" = yes ]; then
  PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\W\[\033[00m\]\$ '
fi
unset color_prompt

# window title
PS1="\[\e]2;\u@\H:\w\a\]$PS1"

# Make sure terminal resizing is noticed
shopt -s checkwinsize

export EDITOR=vim

# Append to the history file, don't overwrite it
shopt -s histappend

# Save multi-line commands as one command
shopt -s cmdhist

# Record each line as it gets issued
PROMPT_COMMAND='history -a'

export HISTSIZE=50000
export HISTFILESIZE=$HISTSIZE
export HISTCONTROL=ignorespace:ignoredups:erasedups
export HISTTIMEFORMAT='%F %T | '

# iso ls timestamps
export TIME_STYLE=long-iso

source .bash_custom
