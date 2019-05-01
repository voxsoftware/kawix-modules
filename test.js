
import reg from 'https://kwx.kodhe.com/x/v/0.3.20/std/coffeescript/register'


init()
async function init() {
	var mod = await KModule.import('https://kwx.kodhe.com/x/std/package/kwa/installer.coffee', {
		force: true
	})
	var Installer = mod.default

	var installer = new Installer({
		module: "kowix",
		version: "3.x"
	})
	console.info(await installer.install())
}