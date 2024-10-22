import  { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

// Cria o contexto
export const ThemeContext = createContext();

// Cria o ThemeProvider
export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro');

  // Atualiza o tema no body
  useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  // Função para alternar entre claro e escuro
  const alternarTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Validação de props usando PropTypes
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
