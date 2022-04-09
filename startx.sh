#!/bin/bash

readonly scale="${1:-1.5}"
readonly xrandr_scale=$(awk -v v="${scale}" 'BEGIN { printf "%.2f", 2 / v; exit(0) }')
readonly gtk_scale=$(awk -v v="${scale}" 'BEGIN { printf "%.2f", v / 2; exit(0) }')
readonly dpi=$(awk -v v="${scale}" 'BEGIN { printf "%.0f", 96 * v; exit(0) }')

export X_DPI="$dpi"
exec ssh-agent startx -- -dpi "$dpi"
