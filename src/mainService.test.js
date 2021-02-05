import { _ } from 'core-js';
import MainService from './mainService.ts';

import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    waitFor,
} from '@testing-library/dom'

import '@testing-library/jest-dom/extend-expect'

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
    //given
    const div = document.createElement('div')
    div.innerHTML = `
    <div data-testid="my-number" id="my-number">
        <div>12341234</div>
        <div data-testid="click-count" id="click-count">0</div>
    </div>`;


    const target = getByTestId(div, 'my-number');
    const service = new MainService(target);

    //이벤트 발생할때 이벤트 리스너를 호출
    div.querySelector("#my-number").addEventListener("click", service.clickHandler);

    //when
    getByTestId(div, 'my-number').click()
    getByTestId(div, 'my-number').click()
    getByTestId(div, 'my-number').click()

    //then
    expect(getByTestId(div, 'click-count')).toHaveTextContent(2);

});
