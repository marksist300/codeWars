/*How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.
Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.
Test examples:
"EBG13 rknzcyr." -->
"ROT13 example."
"This is my first ROT13 excercise!" -->
"Guvf vf zl svefg EBG13 rkprepvfr!"*/

function rot13(str) {
    let code = [];
    let words = str.split('');
    words.forEach(letter => {
        if(!letter.match(/[a-z]/ig)){
            code.push(letter.charCodeAt())
        } else if(letter.charCodeAt() >=65 && letter.charCodeAt() <78){
            code.push(letter.charCodeAt()+13);
        }   else if(letter.charCodeAt()>=78 && letter.charCodeAt()<=90){
            code.push(letter.charCodeAt()-13);
        }   else if (letter.charCodeAt()>= 97 && letter.charCodeAt()<110){
            code.push(letter.charCodeAt()+13);
        } else if (letter.charCodeAt()>=110 && letter.charCodeAt()<=122){
            code.push(letter.charCodeAt()-13)
        }
    });
    const result = code.map(elem=> String.fromCharCode(Number(elem)))
    return result.join('')
}

console.log(rot13('EBG13 rknzcyr.'))