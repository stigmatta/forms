import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [zip,setZip] = useState('');
  const [email,setEmail] = useState(''); 
  const [isEmailValid, setIsEmailValid] = useState(); 
  const [selectedOption, setSelectedOption] = useState('');

 

  



  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const isUsernameValid = () => {
    return username.length >= 5 && username.length <= 7;
  }

  const getUsernameClassName = () => {
    if (!formSubmitted) return '';
    return isUsernameValid() ? 'valid' : 'invalid';
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isPasswordValid = () => {
    return password.length >=7 &&password.length<=12;
  }

  const getPasswordClassName = () => {
    if (!formSubmitted) return '';
    return isPasswordValid() ? 'valid' : 'invalid';
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const isNameValid = () => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name);
  };
  

  const getNameClassName = () => {
    if (!formSubmitted) return '';
    return isNameValid() ? 'valid' : 'invalid';
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const isAddressValid = () => {
    const containsLetter = /[a-zA-Z]/.test(address);
    const containsNumber = /\d/.test(address);
  
    return containsLetter && containsNumber;
  };

  const getAddressClassName = () => {
    if (!formSubmitted) return '';
    return isAddressValid() ? 'valid' : 'invalid';
  };

  const handleChangeCountry = (event) =>{
    setCountry(event.target.value);
  }

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const isZipValid = () => {
    const containsLetter = /[a-zA-Z]/.test(address);
    const containsNumber = /\d/.test(address);
  
    return containsLetter && containsNumber;
  };

  const getZipClassName = () => {
    if (!formSubmitted) return '';
    return isZipValid() ? 'valid' : 'invalid';
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsEmailValid(event.target.checkValidity()); 
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  
  

 

  



  

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (isUsernameValid() && isPasswordValid() && isNameValid() && isAddressValid() && country && isZipValid() && isEmailValid) {
      alert(JSON.stringify({ username, password, name, address, country,zip,email }));
    } else {
      alert('Please correct the form');
    }
  };
  
 

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User id [5 to 7 characters]:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          className={getUsernameClassName()}
        />
      </label>
      <label>
        Password [7 to 12 characters]:
        <input
            type = "password"
            name = "password"
            value = {password}
            onChange={handlePasswordChange}
            className={getPasswordClassName()}>

        </input>
      </label>

      <label>
        Name [Alphabetical characters]:
        <input
            type = "text"
            name = "name"
            value = {name}
            onChange={handleNameChange}
            className={getNameClassName()}>
        </input>
      </label>

      <label>
        Address [Alphanumerical characters]:
        <input
            type = "text"
            name = "address"
            value = {address}
            onChange={handleAddressChange}
            className={getAddressClassName()}>
        </input>
      </label>

        <label>
            Country [Must select a country]
            <select value={country} onChange={handleChangeCountry} required className={country ? "valid" : "invalid"}>
                <option value="">Select a country</option> 
                <option value="Ukraine">Ukraine</option>
                <option value="Japan">Japan</option>
                <option value="USA">Usa</option>
            </select>
        </label>

        <label>
        Zip-Code [Alphanumerical characters]:
        <input
            type = "text"
            name = "zip"
            value = {zip}
            onChange={handleZipChange}
            className={getZipClassName()}>
        </input>
      </label>

        <label>
            Email
            <input 
                type = "email"
                name = "email"
                value = {email}
                onChange={handleEmailChange}
                className={isEmailValid ? 'valid' : 'invalid'}
            >
            </input>
        </label>
        <label>
            Sex [Select One]:
            <input 
                type="radio"
                name="sex"
                value="male"
                checked={selectedOption === "male"}
                onChange={handleOptionChange}
            />
            Male
            </label>
            <label>
            <input 
                type="radio"
                name="sex"
                value="female"
                checked={selectedOption === "female"}
                onChange={handleOptionChange}
            />
            Female
            </label>



      <input type="submit" />
    </form>
  );
}

export default Form;
