import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { GiVibratingSmartphone } from "react-icons/gi";
import { toast } from "sonner";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function Contact() {
    const { t } = useTranslation();
    const [toastDescription, setToastDescription] = useState<string>();

    const copyEmailToClipboard = async (email: string) => {
        try {
            await navigator.clipboard.writeText(email);
            setToastDescription(t("copiedEmail")); // This will update the state to "Email copied!"
        } catch (err) {
            console.error("Failed to copy!", err);
            setToastDescription(t("errorCopying")); // This will update the state to "Error copying email."
        }
    };

    useEffect(() => {
        if (toastDescription) {
            toast(toastDescription, {
                description: "alexandrebeck2003@gmail.com",
                action: {
                    label: t("close"),
                    onClick: () => { },
                },
            });
            setToastDescription(undefined);
        }
    }, [t, toastDescription]);

    return (
        <section
            className="flex h-auto w-full px-4 md:px-12 lg:px-24 xl:px-52 my-24"
            id="Contato"
        >
            <div className="flex flex-col lg:flex-row w-full h-fit gap-6 items-center md:items-start">
                <Badge className="w-fit gap-2 text-5xl rounded-xl p-4 flex text-center items-center">
                    <GiVibratingSmartphone size={50} />
                    {t("contact")}
                </Badge>
                <div className="flex flex-col md:flex-row w-full justify-end gap-6">
                    <Button
                        className="w-full md:min-w-2/5 h-full text-lg md:text-2xl min-h-[84px] items-center flex"
                        variant="secondary"
                        onClick={() => copyEmailToClipboard("alexandrebeck2003@gmail.com")}
                    >
                        <Mail size={30} className="mr-2" />
                        alexandrebeck2003@gmail.com
                    </Button>
                    <a
                        href="https://wa.me//5561981037422"
                        target="_blank"
                        className="w-full md:min-w-2/5"
                    >
                        <Button
                            className="w-full h-full text-lg md:text-2xl min-h-[84px] items-center flex"
                            variant="secondary"
                        >
                            <FaWhatsapp size={30} className="mr-2" /> (61) 98103-7422
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
