import validator from "validator"

export const validateData = (email,password)=>{
   const isEmailVaild = validator.isEmail(email)
   const isPasswordValid = validator.isStrongPassword(password)
//    console.log(isEmailVaild,isPasswordValid);
   

   if(!isEmailVaild) return "EmailID is not vaild"
   if(!isPasswordValid) return "Password is not Strong"

   return null
}  