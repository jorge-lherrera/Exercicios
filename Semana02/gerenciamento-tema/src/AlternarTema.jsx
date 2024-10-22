import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function AlternarTema() {
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <button onClick={alternarTema} className="toggle-theme-btn">
      Alternar para o tema {tema === 'claro' ? 'escuro' : 'claro'}
    </button>
  );
}

export default AlternarTema;
