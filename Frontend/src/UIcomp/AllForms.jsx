import React , { useState } from "react";
import { LoginSignupForm , VerifyPassword , OtpVerification } from "./UserForm";
import {  ReactCode ,NonReactCode , PostForm } from "./PostForm";

    const allForms = [
      LoginSignupForm,
      VerifyPassword,
      OtpVerification,
      PostForm,
      // CodingLanguage,
      ReactCode,
      NonReactCode,
    ];
  
  
    const FormSwitcher = ({ind = 0}) => {
      const [currentFormIndex, setCurrentFormIndex] = useState(ind);
    
      const navigate = (index) => {
        if(index<5){
        setCurrentFormIndex(index);
        }
      };
    
      const SelectedForm = allForms[currentFormIndex];
    
      return (
        <div>
          <SelectedForm navigate={navigate} />
        </div>
      );
    };
    
    export default FormSwitcher;