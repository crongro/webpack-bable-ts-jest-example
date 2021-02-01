import MainService from './mainService.js';

test('adds 1 + 2 to equal 3', () => {

    document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';


    const target = document.querySelector("div");
    const service = new MainService(target)
    const datalist = [1,[2]];
    const subHtml = service.init(datalist);

    console.log(subHtml)

    expect(subHtml).toBe('<span>12</span>');
});