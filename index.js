import alfy from "alfy";

(async () => {
    const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');
    const items = alfy
        .inputMatches(data, 'title')
        .map(element => ({
            title: element.title,
            subtitle: element.body,
            arg: element.id
        }));

    alfy.output(items);
})().catch(e => {
    // Deal with the fact the chain failed
});
