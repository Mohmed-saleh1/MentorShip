

function showMeData(name: string='un',age: number,salary?: string){ // the "?" make the parameter optional
    return ` ${name} - ${age} - ${salary}`
}
console.log(showMeData(undefined,22));
 