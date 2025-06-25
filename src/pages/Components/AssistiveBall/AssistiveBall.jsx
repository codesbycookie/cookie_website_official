/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTimes, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import {social_links} from '../../../../utils/content'
const AssistiveBall = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: window.innerWidth - 60, top: 0, bottom: window.innerHeight - 60 }}
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* Social Media Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              position: 'absolute',
              bottom: 70,
              right: 0,
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 12,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <a href={social_links.linkedin} target="_blank"><FaLinkedinIn size={24} color="#3b5998" /></a>
            <a href={social_links.instagram} target="_blank"><FaInstagram size={24} color="#E4405F" /></a>
            <a href={social_links.whatsapp} target="_blank"><FaWhatsapp size={24} color="#25D366" /></a>
          </motion.div>
        )}

        {/* Assistive Button */}
        <motion.div
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            backgroundColor: '#007bff',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          {open ? <FaTimes size={24} /> : '+'}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AssistiveBall;
