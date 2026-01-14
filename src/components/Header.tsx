import { Button } from "antd";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguageContext } from "../contexts/LanguageContext";

export function Header() {
  const { language } = useLanguageContext();

  return (
    <header className="header-container">
      <Button
        href="/RafaelManfrim_CV.pdf"
        target="_blank"
        rel="noreferrer"
        type="primary"
        shape="round"
        size="middle"
      >
        {language === "en" ? "Download CV" : "Baixar CV"}
      </Button>
      <LanguageSwitcher />
    </header>
  )
}