'use strict';
const alfy = require('alfy');

const TextFixEngine = require("textlint").TextFixEngine;
const path = require("path");

async function lintFile(input="こんにちは嘘, 噂, 叶, 噛, 叩, 喋, 哨, 噌, 吊, 呆World") {
    const options = {
        fix: true,
        rules: ["no-todo"],
        formatterName: "json"
    };
    const engine2 = new TextFixEngine(options);
    const searchTarget = input;
    console.log('sleep start');
    const stringPromise = await engine2.executeOnText(searchTarget, ".txt").then(function (results) {
        console.log('input:   ',input);
        console.log('results: ',JSON.stringify(results));
        const output = engine2.formatResults(results);
        // stringPromise =searchTarget
        return JSON.parse(output)[0].output
    });
    console.log('sleep end');
    return stringPromise;

}

lintFile(alfy.input).then(function (hoge) {
    alfy.output([
        {
            title: 'Unicorn',
            hoge: hoge,
            subtitle: alfy.input
        }
    ]);
});

