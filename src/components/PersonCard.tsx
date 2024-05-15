import React from "react";
import Image from "next/image";
import { User } from "@/utils/common/person";
import { motion } from "framer-motion";

type PersonCardProps = {
  person: User;
};

export const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg max-w-sm mx-auto overflow-hidden p-4"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={person.profilePictureUrl}
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto mt-4"
        width={24}
        height={24}
      />
      <div className="text-center mt-2">
        <h2 className="text-lg text-gray-900 font-semibold">{person.name}</h2>
        <p className="text-gray-700">{person.title}</p>
      </div>
      <div className="flex justify-start mt-4">
        <div className="text-center mr-4">
          <h3 className="text-lg">{person.followers}</h3>
          <span className="text-gray-400 text-sm">Followers</span>
        </div>
        <div className="text-center">
          <h3 className="text-lg">{person.following}</h3>
          <span className="text-gray-400 text-sm">Following</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonCard;
