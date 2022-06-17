"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
class BubbleSort {
    static bubbleSortByStep(list) {
        let needNextPass = true;
        for (let i = 0; i < list.length && needNextPass; i++) {
            needNextPass = false;
            for (let j = 0; j < list.length - i; j++) {
                if (list[j] > list[j + 1]) {
                    console.log(`Swap ${list[j]} with ${list[j + 1]}`);
                    let temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                    needNextPass = true;
                }
            }
            // if (needNextPass = false){
            //     console.log('Array maybe sorted and next pass not needed');
            //     break;
            // }
            console.log(`List after ${i} sort`);
            for (let j = 0; j < list.length; j++) {
                console.log(`${list[j]} \t`);
            }
        }
    }
}
exports.BubbleSort = BubbleSort;
BubbleSort.list = [8, 3, 6, 1, 4, 10, 2, 50];
