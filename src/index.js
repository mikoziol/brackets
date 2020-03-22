/*module.exports = function check(str, bracketsConfig) {
  // your solution
  //a = [].entries

  for (let i = 0; i < bracketsConfig.length; i++) {
    var ba = array[i]; //bracket array
    for (let j = 0; j < array.length; j++) {
      ba[j] 
      
      const element = array[index];
      
    }
  }
}*/
module.exports = function check(str, bracketsConfig){
  let i, l=str.length,  char,  last, stack=[];

  for(i=0; i<l; i++){
      char=str[i];
      if(char=="{" || char=="("){
          stack.push(char);
          last=char;
      }else if(char == '}' || char == ")"){
          if(last){
              if((char == '}' && last == "{") || (char == ')' && last == '('))
              {
                  stack.pop();
                  last = stack.length > 0 ? stack[stack.length - 1] : undefined;
              }
          }else{
              return false;
          }
      }
  }
  return stack.length==0;
}



/*
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true




*/