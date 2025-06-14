set nocompatible
filetype off

set mouse-=a

" infinite undo
if !isdirectory($HOME . "/.local/state/vim/undodir")
  call mkdir($HOME . "/.local/state/vim/undodir", "p")
endif
set undofile
set undodir=~/.local/state/vim/undodir

" move .viminfo out of $HOME
set viminfo+=n~/.config/vim/info

" tab sizes
set tabstop=2
set shiftwidth=2
set softtabstop=2

set noexpandtab
set smarttab
set autoindent

autocmd Filetype yml setlocal ts=2 sw=2 sts=2 expandtab
autocmd Filetype yaml setlocal ts=2 sw=2 sts=2 expandtab
autocmd Filetype scala setlocal ts=2 sw=2 sts=2 expandtab

set list
set lcs=tab:>-,lead:·

" line numbers
set number
set ruler

"  searching
set incsearch
set ignorecase
set hlsearch

" create swp files in tmp
if !isdirectory($HOME . "/.local/state/vim/swp")
  call mkdir($HOME . "/.local/state/vim/swp", "p")
endif
set directory=~/.local/state/vim/swp

" show matching brackets
set showmatch

" no error bells
set noerrorbells
set visualbell

" remove trailing whitespace
"autocmd BufWritePre * :%s/\s\+$//e

" stop colored text being bold
set background=light

syntax on
