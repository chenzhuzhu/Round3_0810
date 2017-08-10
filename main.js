/**
 * Created by cyz on 2017/8/10.
 */
'use strict';
let arr =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,0];
console.log('该数组为'+'['+arr+']')
findNum(arr);

function find(collection,item){
    for(let each of collection){
        if(each['name'] ==item){
            return each
        }
    }
    return false
}

function findNum(arr){
    var temp_arr=[]
    for(let item of arr){
        let finded =find(temp_arr,item)
        if(finded){
            finded.count+=1;
        }else{
            temp_arr.push({name:item,count:1})
        }
    }

    for(let each_temp of temp_arr){
        if (each_temp.count==1){
            console.log('这个数字是'+each_temp['name'])
        }
    }
}

