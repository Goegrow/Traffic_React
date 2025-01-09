import { icons } from 'lucide-react';

const Icon = ({ name, className }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.error(`Icon with name "${name}" not found.`);
    return null; 
  }

  return <LucideIcon className={className} />;
};

export default Icon;