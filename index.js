'use strict';
const alfy = require('alfy');

const TextLintEngine = require("textlint").TextLintEngine;
const TextFixEngine = require("textlint").TextFixEngine;
const cli = require("textlint").cli;
// const TextLintFixer = require("textlint/src/fixer/textlint-fixer").TextLintFixer

const path = require("path");
async function lintFile() {
	const options = {
		fix: true,
		// load rules from [../rules]
		rules: ["no-todo"],
		formatterName: "json"
	};
	// const engine = new TextLintEngine(options);
	const engine2 = new TextFixEngine(options);

	// return 'hoge';
	// const filePathList = [path.resolve(process.cwd(), filePath)];
	// return engine.executeOnFiles(filePathList).then(function(results) {
	// 	if (engine.isErrorResults(results)) {
	// 		const output = engine.formatResults(results);
	// 		console.log(output);
	// 		// return output
	// 	} else {
	// 		console.log("All Passed!");
	// 	}
	// });

	// const searchTarget = "ほんのり(優しく)チェックできるtextlintプラグインを探さなければならない"
	// return engine.executeOnText(searchTarget).then(function(results) {
	// 	console.log(JSON.stringify(results));
	// 	if (engine.isErrorResults(results)) {
	// 		const output = engine.formatResults(results);
	// 		console.log(output);
	// 	} else {
	// 		console.log("All Passed!");
	// 	}
	// });

	const searchTarget = "ほんのり(優しく)チェッ,,,クできるtextlintプラグインを探さなければならない,家中天使嫌中";
	console.log('sleep start');
	const stringPromise = await engine2.executeOnText(searchTarget, ".txt").then(function(results) {
		console.log(results);
		const output = engine2.formatResults(results);
		// stringPromise =searchTarget
		return JSON.parse(output)[0].output
	});
	console.log('sleep end');
	return stringPromise;

}

lintFile().then(function(hoge){
	alfy.output([
		{
			title: 'Unicorn',
			hoge: hoge,
			subtitle: alfy.input
		}
	]);
});
// let hoge = lintFile(`${__dirname}/README.md`).catch(function(error) {
// 	console.error(error);
// 	process.exit(1);
// });

