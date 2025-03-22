import { motion } from 'framer-motion';
import ModalHeader from '../ui/ModalHeader';
import ModalContent from '../ui/ModalContent';


const MobileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-3/4">
        <ModalHeader onClose={onClose} />
        <ModalContent />
      </div>
    </motion.div>
  );
};

export default MobileModal;