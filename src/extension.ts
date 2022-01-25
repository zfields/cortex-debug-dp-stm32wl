import { Extension, extensions, ExtensionContext, window } from 'vscode';
import * as path from 'path';

interface CortexDebug {
	registerSVDFile(expression: RegExp | string, path: string): void;
}

export function activate(context: ExtensionContext) {
	const cortexDebug: Extension<CortexDebug> = <Extension<CortexDebug>>extensions.getExtension('marus25.cortex-debug');
	if (!cortexDebug) {
		window.showErrorMessage('Cortex-Debug Extension is not available for device support packages');
		return;
	}

	cortexDebug.activate().then((cdbg) => {
		cdbg.registerSVDFile(/^STM32WL5[a-z0-9]_CM0P.*/i, path.join(context.extensionPath, 'data', 'STM32WL5x_CM0P.svd'));
		cdbg.registerSVDFile(/^STM32WL5[a-z0-9]_CM4.*/i, path.join(context.extensionPath, 'data', 'STM32WL5x_CM4.svd'));
		cdbg.registerSVDFile(/^STM32WLE5_CM4.*/i, path.join(context.extensionPath, 'data', 'STM32WLE5_CM4.svd'));
	}, (error) => {
		console.log('Unable to activate cortexDebug');
	});
}

export function deactivate() {}
