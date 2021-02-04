import { _ } from 'core-js';
import MainService from './mainService.ts';

test('initial rendering test', () => {
    //given
	document.body.innerHTML =
		'<div>' + '  <span id="username" />' + '  <button id="button" />' + '</div>';
	const target = document.querySelector('div');
	const service = new MainService(target);
    const datalist = [1, [2]];
    
    //when
	const subHtml = service.init(datalist);

    //then
	expect(subHtml).toContain('<div>12</div>');
});

test('clickevent', () => {
    document.body.innerHTML = `
    <div id="my-number">
        <div>12341234</div>
        <div id="click-count">0</div>
    </div>`;

    const target = document.querySelector('#my-number');
    const service = new MainService(target);
    service.on();

    const count = document.querySelector("#click-count").textContent;
    console.log(count);

});
