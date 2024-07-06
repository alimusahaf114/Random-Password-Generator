function generatePassword(length , includeLowercase , includeUppercase , includeSymbols ){
    
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz" ;
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    const numbarChar = "0123457689" ;
    const symbolChar = "!@#$%^&*()_+?><:" ;

    let allowedChar = "" ;
    let password = "" ;

    allowedChar += includeLowercase ? lowercaseChar : "" ;
    allowedChar += includeUppercase ? uppercaseChar : "" ;
    allowedChar += includeNumbers ? numbarChar : "" ;
    allowedChar += includeSymbols ? symbolChar : "" ;

        if(length <= 0){
            return `(Password length must be atleast 12)` ;
        }
        if(allowedChar.length===0){
            return `(At least 1 set of character needs to be selected)`;
        }
        for(let i = 0 ; i<length ; i++){
            const randomIndex = Math.floor(Math.random() * allowedChar.length)
            password += allowedChar[randomIndex] ;
        }
    return password ;
}
    const passwordLength = 12 ;
    const includeLowercase = true ;
    const includeNumbers = true ;
    const  includeUppercase = true ;
    const includeSymbols = false ;

    const password = generatePassword(passwordLength ,
                                     includeLowercase ,
                                     includeNumbers , 
                                     includeSymbols ,
                                      includeUppercase)

                                      console.log(`Generated password: ${password}`);


