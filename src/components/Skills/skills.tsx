import { useTranslation } from "react-i18next";
import { GiBookCover } from "react-icons/gi";

import { Badge } from "../ui/badge";

export function Skills() {
    const { t } = useTranslation();

    return (
        <section
            className="flex h-auto w-full px-4 md:px-12 lg:px-24 xl:px-52 my-24"
            id="Conhecimentos"
        >
            <div className="flex flex-col lg:flex-row w-full h-fit gap-6">
                <Badge className="w-fit gap-2 text-5xl rounded-xl p-4 flex text-center items-center">
                    <GiBookCover size={50} />
                    {t("skills")}
                </Badge>

            </div>
        </section>
    )
}