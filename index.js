'use strict';
const alfy = require('alfy');
const TextFixEngine = require("textlint").TextFixEngine;

const getEnv = key => process.env[`alfred_${key}`];

alfy.meta = {
    name: getEnv('workflow_name'),
    version: getEnv('workflow_version'),
    uid: getEnv('workflow_uid'),
    bundleId: getEnv('workflow_bundleid')
};

const debug = (alfy.meta.name) ? () => {} : console.log;

// const debug = function () {
//     if (alfy.meta.name) {
//         return () => {
//         }
//     }
//     return console.log
// };
//
async function fixText(alfy_input) {
    return "こんにちは嘘, 噂, 叶, 噛, 叩, 喋, 哨, 噌, 吊, 呆World"
    // return alfy_input
    // if (!alfy_input) {
    //     alfy_input = "こんにちは嘘, 噂, 叶, 噛, 叩, 喋, 哨, 噌, 吊, 呆World"
    // }
    // const options = {
    //     fix: true,
    //     rules: ["no-todo"],
    //     formatterName: "json"
    // };
    // const engine2 = new TextFixEngine(options);
    // debug('sleep start');
    // const stringPromise = await engine2.executeOnText(alfy_input, ".txt").then(function (results) {
    //     debug('alfy_input:   ', alfy_input);
    //     debug('results: ', JSON.stringify(results));
    //     const output = engine2.formatResults(results);
    //     // stringPromise =alfy_input
    //     return JSON.parse(output)[0].output
    // });
    // debug('sleep end');
    // debug('typeof', typeof stringPromise);
    // return stringPromise;

}

// const fixedText = await fixText(alfy.input)
// debug('fixText start');
// alfy.output([
//     {
//         title: fixedText,
//         // subtitle: alfy.input
//     }
// ]);
// debug('fixText end');

fixText(alfy.input).then(function (fixedText) {
    debug('fixText start');
    alfy.output([
        {
            title: fixedText,
            subtitle: alfy.input
        }
    ]);
    debug('fixText end');
});

