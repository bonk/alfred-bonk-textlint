'use strict';
const alfy = require('alfy');

const TextLintEngine = require("textlint").TextLintEngine;
const TextFixEngine = require("textlint").TextFixEngine;
const cli = require("textlint").cli;
// const TextLintFixer = require("textlint/src/fixer/textlint-fixer").TextLintFixer

const path = require("path");
function lintFile(filePath) {
	const options = {
		// load rules from [../rules]
		rules: ["no-todo"],
		formatterName: "pretty-error"
	};
	const engine = new TextLintEngine(options);
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

	const searchTarget = "私はは、.aBde 　 　ほんのり(優しく)チェッ,,,クできるtextlintプラグインを探さなければならない,家中天使嫌中,"
	// return engine2.onText(searchTarget);
	return cli.executeWithOptions({
		fix: true,
		debug: true,
		// version: true,
		// rules: {
		// 	"ja-no-mixed-period": {
		// 		"periodMark": "。",
		// 		"allowPeriodMarks": ['}','笑'],
		// 		"allowEmojiAtEnd": true,
		// 		"forceAppendPeriod": true
		// 	}
		// },
		// rules: ["no-todo"],
		// config: `${__dirname}/.textlintrc`,
		textlintrc: true,
		formatterName: "pretty-error"
	}, [], searchTarget, ".txt").then(function(results) {
		console.log(searchTarget);
		console.log(results);
		console.log(JSON.stringify(results));
		// if (engine2.isErrorResults(results)) {
		// 	const output = engine2.formatResults(results);
			// printResults(output, cliOptions);
			// console.log(output);
		// } else {
		// 	console.log("All Passed!");
		// }
		// const fixer = new TextLintFixer();
		// return fixer.write(results).then(function () {
		// 	return 0;
		// });
	});
	// return engine2.executeOnText(searchTarget).then(function(results) {
	// 	console.log(JSON.stringify(results));
	// 	if (engine2.isErrorResults(results)) {
	// 		const output = engine2.formatResults(results);
	// 		// printResults(output, cliOptions);
	// 		console.log(output);
	// 	} else {
	// 		console.log("All Passed!");
	// 	}
	// 	const fixer = new TextLintFixer();
	// 	return fixer.write(results).then(function () {
	// 		return 0;
	// 	});
	// });

	// const result = await engine.executeOnText(searchTarget).catch(e => {
	// 	console.log('textlint error', e);
	// 	return [{messages : []}];
	// });
	// result[0].messages.forEach(message => {
	// 	item.typos[message.message] = message.fix || message.ruleId;
	// });

}

let hoge = lintFile(`${__dirname}/README.md`);
// let hoge = lintFile(`${__dirname}/README.md`).catch(function(error) {
// 	console.error(error);
// 	process.exit(1);
// });

alfy.output([
	{
		title: 'Unicorn',
		hoge: hoge,
		subtitle: alfy.input
	}
]);
