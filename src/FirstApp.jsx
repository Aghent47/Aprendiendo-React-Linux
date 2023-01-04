
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

// Desestructuando los Props {title, subtitle, age}
export const FirstApp = ({title, subtitle , age}) => { 
 
  return (
    <>
    <h1> {title} </h1>
    <h2> {`${getNameUsers().name} ${age} Años `}</h2>
    <h3> { subtitle } </h3>
    </>
  )
  
}

// Definiendo los PropTypes

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  age: PropTypes.string, 
}

// Definiendo los defaultProps (Se ejecutan primero que los PropTypes)
FirstApp.defaultProps = {
  name: 'Neider Hernández',
  /* title: "Titulo no especificado", */
  subtitle: "Software Engineer",
  age: "Edad no especificada",

}