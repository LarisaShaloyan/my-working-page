import React from 'react';
import photo from '../image/name.jpg'
import { IoWoman } from "react-icons/io5";
import { IoMailUnread } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const PersonalInfo = () => {
    return (
        <div className="personal-info">
         <   img src={photo} alt="Profile" className="profile-picture" />
            <h2>Անձնական Տվյալներ</h2>
            <p><IoWoman />
                Անուն: Լարիսա Շալոյան</p>

            <p>
                <IoMailUnread />     Էլ.փոստ: shaloyan1999@mail.ru</p>
            <p>  <FaSquarePhone />  Հեռախոս: +374 94 492 905</p>
            <p>  <FaGithub /> Github: LarisaShaloyan.github.io </p>
            <p> <FaTelegram /> Telegram  </p>
            <p><FaWhatsapp /> Whatsapp </p>
        </div>
    );
}

export default PersonalInfo;
