export const range=(start:number, end:number):number[]=>{
    return [...Array(end-start).keys()].map((el)=>el+start);
};

export const pluck=(elemnts:any[],field:string)=>{
    return elemnts.map((el)=>el[field]);
};