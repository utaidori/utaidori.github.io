if v:servername == 'GVIM1'
	let file = expand('%:p')
	bw
	call remote_send('GVIM', '<ESC>:tabnew ' .file .'|lcd %:h<CR>')
	call remote_foreground('GVIM')
	q
endif
