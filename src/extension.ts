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
		cdbg.registerSVDFile(/^STM32L4[a-z0-9]1.*/i, path.join(context.extensionPath, 'data', 'STM32L4x1.svd'));
		cdbg.registerSVDFile(/^STM32L4[a-z0-9]2.*/i, path.join(context.extensionPath, 'data', 'STM32L4x2.svd'));
		cdbg.registerSVDFile(/^STM32L4[a-z0-9]3.*/i, path.join(context.extensionPath, 'data', 'STM32L4x3.svd'));
		cdbg.registerSVDFile(/^STM32L4[a-z0-9]5.*/i, path.join(context.extensionPath, 'data', 'STM32L4x5.svd'));
		cdbg.registerSVDFile(/^STM32L4[a-z0-9]6.*/i, path.join(context.extensionPath, 'data', 'STM32L4x6.svd'));
	}, (error) => {
		console.log('Unable to activate cortexDebug');
	});
}

export function deactivate() {}
