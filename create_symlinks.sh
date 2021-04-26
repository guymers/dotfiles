#!/bin/bash
set -e

readonly dest="$HOME"

files=(
.bash_aliases
.bashrc
.gitconfig
'.gtkrc-2.0'
.ideavimrc
.inputrc
open_terms.sh
startx.sh
.vimrc
.Xdefaults
.xinitrc
.Xmodmap
.Xresources
.xscreensaver
)
for f in "${files[@]}"; do
	ln -s ".dotfiles/$f" "$dest/$f"
done

config_files=(
chrome-flags.conf
chromium-flags.conf
fontconfig
git
gtk-3.0
openbox
redshift
trizen
)
for f in "${config_files[@]}"; do
	ln -s "../.dotfiles/config/$f" "$dest/.config/$f"
done

mkdir "$dest/.config/systemd"
ln -s "../.dotfiles/config/systemd/user" "$dest/.config/systemd/"
systemctl --user enable thunar
systemctl --user enable xscreensaver
