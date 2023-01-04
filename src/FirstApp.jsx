
// import React, { Fragment } from 'react' = <> 
import PropTypes from 'prop-types';

const getNameUsers = () =>  {
  const users = {
    name: 'Neider Hernández',
    age: '25',
    city: 'Ciudad de México',
   }
  return users;  
}

// Desestructuando los Props {title, subTitle, age}
export const FirstApp = ({ title, subTitle, name}) => { 
 
  return (
    <>
    <h1>{ title }</h1>
    <p> { name } </p>
    {/* <h2> {`${getNameUsers().name} ${age} Años `}</h2>
    <h3> { subtitle } </h3> */}
    <p> { subTitle } </p>
    
    </>
  )
  
}

// Definiendo los PropTypes

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string, 
}

// Definiendo los defaultProps (Se ejecutan primero que los PropTypes)
FirstApp.defaultProps = {
  name: 'Neider Hernández',
  /* title: "Titulo no especificado", */
  subTitle: "Software Engineer",

}