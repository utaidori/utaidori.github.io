if v:servername == 'GVIM1'
	let file = expand('%:p')
	bw
	call remote_send('GVIM', '<ESC>:tabnew ' .file .'|lcd %:h<CR>')
	call remote_foreground('GVIM')
	q
endif

function! LasiAfisxon(elm)
	call append(a:elm, ['<article>', '<h3></h3>', '<div class="parenthesis">' .strftime('%Y/%m/%d') .'</div>', '<p>', '</article>', ''])
endfunction

noremap <f2> :call LasiAfisxon(35)<CR>
inoremap <C-g>e <span lang="eo"></span><C-o>F<
