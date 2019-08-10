set nocompatible
filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal

Plugin 'gmarik/Vundle.vim'

Plugin 'derekwyatt/vim-scala'
Plugin 'pangloss/vim-javascript'
Plugin 'mxw/vim-jsx'
Plugin 'nicholaides/words-to-avoid.vim'

call vundle#end()
filetype plugin indent on

" infinite undo
if !isdirectory($HOME . "/.vim/undodir")
  call mkdir($HOME . "/.vim/undodir", "p")
endif
set undofile
set undodir=~/.vim/undodir

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

" line numbers
set number
set ruler

"  searching
set incsearch
set ignorecase
set hlsearch

" create swp files in tmp
set directory=/tmp//

" show matching brackets
set showmatch

" no error bells
set noerrorbells
set visualbell

set nocompatible

" remove trailing whitespace
"autocmd BufWritePre * :%s/\s\+$//e

" stop colored text being bold
set background=light

syntax on
