
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
        return `<span>${data}</span>`
    }

}