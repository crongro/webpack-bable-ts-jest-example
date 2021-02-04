
export default class MainService  {
    targetEl: HTMLElement;
    dataList: string;
    constructor({target}:{target:any}) {
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

    on() {
        document.querySelector("#my-number")?.addEventListener("click", ()=> {
            const clickCountEl = document.querySelector("#click-count");
            if(!clickCountEl)  return; 

            let count : number;
            count = parseInt(clickCountEl.textContent as string) + 1;
            clickCountEl.textContent = String(count);
        })
    }

}