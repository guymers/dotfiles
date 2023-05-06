#!/bin/bash

[ -f ~/.Xresources ] && xrdb -merge ~/.Xresources
if [ -n "$X_DPI" ]; then
  temp_file=$(mktemp)
  echo "Xft.dpi: $X_DPI" > "$temp_file"
  xrdb -merge "$temp_file"
  rm -f "$temp_file"
fi
[ -f ~/.Xmodmap ] && xmodmap ~/.Xmodmap

if [ -d /etc/X11/xinit/xinitrc.d ] ; then
  for f in /etc/X11/xinit/xinitrc.d/?*.sh ; do
    [ -x "$f" ] && . "$f"
  done
  unset f
fi

setxkbmap -option caps:escape

systemctl --user --no-block start xsession.target

# locking after inactivity
xset s on
xset s 600
xss-lock -l -- sxlock -l -u _ &

/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
exec openbox
