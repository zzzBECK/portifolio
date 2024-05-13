import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { GiVibratingSmartphone } from "react-icons/gi";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function Contact() {
    const { t } = useTranslation();

    return (
        <section
            className="flex h-auto w-full px-4 md:px-12 lg:px-24 xl:px-52 my-24"
            id="Contato"
        >
            <div className="flex items-center w-full h-fit gap-6">
                <Badge className="w-fit gap-2 text-5xl rounded-xl p-4 flex text-center items-center">
                    <GiVibratingSmartphone size={50} />
                    {t("contact")}
                </Badge>
                <div className="flex w-full justify-end gap-10">
                    <Button className="w-2/5 h-full text-2xl min-h-[84px] items-center flex" variant='secondary'><Mail size={30} className="mr-2" /> alexandrebeck2003@gmail.com</Button>
                    <a href="https://wa.me//5561981037422" target="_blank" className="w-2/5">
                        <Button className="w-full h-full text-2xl min-h-[84px] items-center flex" variant='secondary'><FaWhatsapp size={30} className="mr-2" /> (61) 98103-7422</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
