
export default class MainService  {
    targetEl: HTMLElement;
    dataList: string;
    constructor(target:HTMLElement) {
        this.targetEl= target;
        this.dataList = '';
    }

    init(dataList:number[]) {
        this.dataList = dataList.flat(1).join('');
        return this.render(this.dataList);
    }

    render(data:string):string {
        return `<div id="my-number">
                    <div>${data}</div>
                    <div id="click-count">0</div>
                </div>`
    }

    clickHandler({target} : {target:HTMLElement}) : void{
        const clickCountEl = target.closest('#my-number')?.querySelector("#click-count");
        console.log(clickCountEl)
        if(!clickCountEl)  return; 

        let count : number;
        count = parseInt(clickCountEl.textContent as string) + 1;
        clickCountEl.textContent = String(count);
    }

    on() {
        const el = this.targetEl.querySelector("#my-number");
        if(el) el.addEventListener("click", this.clickHandler.bind(this));
    }

};