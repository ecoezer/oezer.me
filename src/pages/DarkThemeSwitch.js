import { useDarkMode } from "./hooks/useDarkMode";
import { BsSunFill } from "react-icons/bs";
import { GiOwl } from "react-icons/gi";

const DarkThemeSwitch = () => {
  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <div className="theme-icon">
        <span onClick={handleMode}>
          {darkTheme ? (
            <GiOwl id="Owl" size="40" className="theme-icon " />
          ) : (
            <BsSunFill id="BsSunFill" size="40" className="theme-icon" />
          )}
        </span>
      </div>
    );
  };

  return (
    <div className="w-fit ml-auto -mt-20 ">
      <ThemeIcon />
    </div>
  );
};

export default DarkThemeSwitch;
