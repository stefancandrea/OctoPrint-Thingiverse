customElements.define('x-frame-bypass', class extends HTMLIFrameElement {
	constructor () {
		super()
	}
	connectedCallback () {
		this.load(this.src)
		this.src = ''
	}
	load (url, options) {
		if (!url || !url.startsWith('http'))
			throw new Error(`X-Frame-Bypass src ${url} does not start with http(s)://`)
		console.log('X-Frame-Bypass loading:', url)

        //This is a place where the resquest and respons is catched !
        // Here I need to modify the X-Frame-Option for the request part !
        // Or to remove the Content-Security-Policy after page loaded, but before displayed ! (this is easier)
    }
}, {extends: 'iframe'})
