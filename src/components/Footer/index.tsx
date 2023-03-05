import { useMemo } from 'react';
import { FaConnectdevelop, FaGithubSquare, FaLinkedin, FaTelegram } from 'react-icons/fa';

export const Footer = () => {
  const flexStyle = useMemo(() => 'flex items-center gap-2', []);
  return (
    <footer className="p-5 bg-slate-900 text-white rounded-t-xl flex justify-between gap-20">
      <div className="flex gap-20">
        <div>
          <h3>About</h3>
          <a className={flexStyle} href="https://www.linkedin.com/in/noname-digital-4010041b5/">
            <FaConnectdevelop />
            TT for NONAME.DIGITAL
          </a>
        </div>
        <div>
          <h3>Author</h3>
          <ul>
            <li>
              <a className={flexStyle} href="https://github.com/sultan-oganov">
                <FaGithubSquare />
                GitHub
              </a>
            </li>
            <li>
              <a className={flexStyle} href="https://www.linkedin.com/in/sultan-oganov/">
                <FaLinkedin />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <a className={flexStyle} href="https://t.me/Sultan_Oganov">
          <FaTelegram />
          <h2>Sultan.oganov@gmail.com</h2>
        </a>
      </div>
    </footer>
  );
};
