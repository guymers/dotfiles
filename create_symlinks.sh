#!/bin/bash
set -e

if ! [[ "$HOME/.config/.dotfiles" -ef "$PWD" ]]; then
	echo "must be in .config/.dotfiles directory" 1>&2
	exit 1
fi

cd "$HOME"

files=(
.bash_aliases
.bashrc
startx.sh
.vimrc
.Xdefaults
.xinitrc
.Xmodmap
.Xresources
)
for f in "${files[@]}"; do
	ln -s ".config/.dotfiles/$f"
done

ln -s ".config/.dotfiles/config/gtk-2.0/gtkrc" ".gtkrc-2.0"

cd "$HOME/.config"

config_files=(
chromium-flags.conf
fontconfig
foot
git
gtk-3.0
ideavim
labwc
openbox
paru
postgresql
readline
redshift
)
for f in "${config_files[@]}"; do
	ln -s ".dotfiles/config/$f"
done

mkdir "systemd"
ln -s ".dotfiles/config/systemd/user" "systemd"

systemctl --user enable thunar
