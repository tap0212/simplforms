import { ButtonProps } from '../types';

const FilledButton = ({ children, onClick, className }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-secondary text-primary rounded-md shadow-lg hover:bg-coolBlue hover:text-secondary  ${className}`}>
    {children}
  </button>
);
export default FilledButton;
