import s from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.date}>{new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
