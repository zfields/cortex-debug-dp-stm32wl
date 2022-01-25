import { Extension, extensions, ExtensionContext, window } from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

interface CortexDebug {
	registerSVDFile(expression: RegExp | string, path: string): void;
}

export function activate(context: ExtensionContext) {
	const cortexDebug: Extension<CortexDebug> = <Extension<CortexDebug>>extensions.getExtension('marus25.cortex-debug');
	if (!cortexDebug) {
		window.showErrorMessage('Cortex-Debug Extension is not available for device support packages');
		return;
	}

	var files = fs.readdirSync(path.join(context.extensionPath, 'data')).filter(function (file) {
		return path.extname(file).toLowerCase() === '.svd';
	});

	cortexDebug.activate().then((cdbg) => {
		files.forEach((file) => cdbg.registerSVDFile(file.replace(/\.[^/.]+$/, ""), path.join(context.extensionPath, 'data', file)));
	}, (error) => {
		console.log('Unable to activate cortexDebug');
	});
}

export function deactivate() {}
