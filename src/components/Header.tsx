import { Button } from "antd";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { HeaderContent } from "../data/profile";

export function Header({ headerContent }: { headerContent: HeaderContent }) {
  return (
    <header className="header-container">
      <Button
        href={headerContent.cvFilePath}
        target="_blank"
        rel="noreferrer"
        type="primary"
        shape="round"
        size="middle"
      >
        {headerContent.downloadCvLabel}
      </Button>
      <LanguageSwitcher />
    </header>
  )
}