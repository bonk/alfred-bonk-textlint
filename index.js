'use strict';
const alfy = require('alfy');

const TextFixEngine = require("textlint").TextFixEngine;
const path = require("path");

async function fixText(alfy_input = "こんにちは嘘, 噂, 叶, 噛, 叩, 喋, 哨, 噌, 吊, 呆World") {
    const options = {
        fix: true,
        rules: ["no-todo"],
        formatterName: "json"
    };
    const engine2 = new TextFixEngine(options);
    console.log('sleep start');
    const stringPromise = await engine2.executeOnText(alfy_input, ".txt").then(function (results) {
        console.log('alfy_input:   ', alfy_input);
        console.log('results: ', JSON.stringify(results));
        const output = engine2.formatResults(results);
        // stringPromise =alfy_input
        return JSON.parse(output)[0].output
    });
    console.log('sleep end');
    return stringPromise;

}

fixText(alfy.input).then(function (fixedText) {
    alfy.output([
        {
            title: fixedText,
            subtitle: alfy.input
        }
    ]);
});

