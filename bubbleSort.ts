export class BubbleSort{
    static list: number[] = [8,3,6,1,4,10,2,50];
    public static bubbleSortByStep(list: number[]): void {
        let needNextPass: boolean = true;
        for (let i = 0; i < list.length && needNextPass; i++) {
            needNextPass = false;
            for (let j = 0; j < list.length - i; j++){
                if (list[j] > list[j+1]){
                    console.log(`Swap ${list[j]} with ${list[j+1]}`);
                    let temp: number = list[j];
                    list[j] = list[j+1];
                    list[j+1] = temp;
                    needNextPass = true;
                }
            }
            // if (needNextPass = false){
            //     console.log('Array maybe sorted and next pass not needed');
            //     break;
            // }
            console.log(`List after ${i} sort`);
            for (let j = 0; j< list.length; j++){
                console.log(`${list[j]} \t`)
            }
        }
    }
}