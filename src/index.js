module.exports = function check(str, bracketsConfig) {

  if (str.length === 0 || bracketsConfig === 0) return false;

  const bracketObj = {}
  let brasketStr = ''
  const result = []

  for (let i=0; i<bracketsConfig.length; i++) {
    bracketObj[bracketsConfig[i][1]] = bracketsConfig[i][0]  // формируем пары зактывающая-открывающая
    brasketStr = bracketsConfig[i][0] + brasketStr           // формируем строку открывающих
  }


  for (let i=0; i<str.length; i++) {
    if (result[result.length-1] === bracketObj[str[i]] && result.length > 0)  result.pop(); // если верхняя в стеке и пришедшая составляют пару, то убираем из стека
      else if (brasketStr.includes(str[i])) result.push(str[i]);                            // если идёт открывающая заносим её в стек
        else return false;                                                                  // если идёт закрывающая при пустом result или не парная верхней
  }

  return result.length === 0;                                                               // если остались открывающие

}
