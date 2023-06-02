import css from './home.module.css';
import Navigation from './Navigation';
const Header = () => {
  return (
    <div className={css.header}>
      <Navigation />
    </div>
  );
};
export default Header;
