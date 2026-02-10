import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

const BackToHomeButton = () => {
  const t = useTranslations();
  return (
    <Link href="/" className="back-btn">
      <ArrowLeft />
      <span>{t("back")}</span>
    </Link>
  );
};

export default BackToHomeButton;
