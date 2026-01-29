import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";

const SmsPasswordModal = ({ isOpen, onClose, onSubmit }) => {
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="custom-modal"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <p className="title">CHANGE SMS PASSWORD</p>
            <CustomInput
              placeholder={"Old Password"}
              containerStyle={{ marginBottom: 32 }}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <CustomInput
              placeholder={"New Password"}
              containerStyle={{ marginBottom: 32 }}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <CustomButton text={"Confirm"} style={{marginBottom: 32}} onClick={() => onSubmit(oldPassword, newPassword)} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SmsPasswordModal;
