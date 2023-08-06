import React from 'react';
import { Icon } from '@iconify/react';
import discordIcon from '@iconify-icons/simple-icons/discord';
import instagramIcon from '@iconify-icons/simple-icons/instagram';
import youtubeIcon from '@iconify-icons/simple-icons/youtube';
import githubIcon from '@iconify-icons/simple-icons/github';
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';

const SocialButtons = () => {
  return (
    <div className="social-buttons-container fixed">

      <a href="https://www.youtube.com/" className="social-button bg-red-600" rel="noopener noreferrer">
        <Icon icon={youtubeIcon} />
      </a>

      <a href="https://discord.com/channels/@me" className="social-button bg-blue-600"  rel="noopener noreferrer" >
        <Icon icon={discordIcon} />
      </a>

      <a href="https://web.whatsapp.com/" className="social-button bg-green-500" rel="noopener noreferrer" >
      <Icon icon="ic:baseline-whatsapp" />
      </a>

      <a href="https://github.com/" className="social-button bg-black"  rel="noopener noreferrer">
        <Icon icon={githubIcon} />
      </a>

      <a href="https://www.instagram.com/" className="social-button bg-pink-500"  rel="noopener noreferrer">
        <Icon icon={instagramIcon} />
      </a>

      <a href="https://www.linkedin.com/" className="social-button bg-blue-600"  rel="noopener noreferrer" >
        <Icon icon={linkedinIcon} />
      </a>

      <a href="https://www.google.com/mail" className="social-button bg-white-600"  rel="noopener noreferrer" >
        <Icon icon="logos:google-gmail" />
      </a>

      <a href="https://music.youtube.com/" className="social-button bg-red-600"  rel="noopener noreferrer" >
        <Icon icon="simple-icons:youtubemusic" />
      </a>

    </div>
  );
};

export default SocialButtons;
