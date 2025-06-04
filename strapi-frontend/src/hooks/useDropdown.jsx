import { useState, useEffect, useRef } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';

function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const Dropdown = ({ children }) => {
    return (
      <div ref={dropdownRef} className='relative inline-block'>
        {children({
          isOpen,
          toggle,
          close,
          AnimatedMenu: ({ children: menuChildren, className: menuClassName }) => (
            <AnimatePresence>
              <motion.ul
                key='dropdown'
                initial={{ opacity: 0, y: -10 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={{ display: isOpen ? 'flex' : 'none' }}
                className='absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 origin-top p-3 items-center'
              >
                {menuChildren}
              </motion.ul>
            </AnimatePresence>
          ),
        })}
      </div>
    );
  };

  return { isOpen, toggle, close, Dropdown };
}

export default useDropdown;
