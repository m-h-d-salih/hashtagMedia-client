import { X } from 'lucide-react';

const ModalHeader = ({ onClose }) => (
  <div className="flex justify-between items-center border-b pb-2">
    <h2 className="text-lg font-bold">Menu</h2>
    <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full">
      <X size={24} />
    </button>
  </div>
);

export default ModalHeader;