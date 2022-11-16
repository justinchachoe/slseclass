import clsx from "clsx";
import Social, { SocialLink } from "@components/ui/social";
import WidgetTitle from "./widget-title";

type TProps = {
    className?: string;
    mode?: "light" | "dark";
};

const TextWidget = ({ className, mode }: TProps) => {
    return (
        <div className={clsx(className)}>
            <WidgetTitle mode={mode}>Address</WidgetTitle>
            <div
                className={clsx(
                    "content ",
                    mode === "dark" && "tw-text-gray-400"
                )}
            >
                <p className="tw-mb-[11px]">
                    147/1 M.5 T. Faham, A. Muang Chiang Mai 50000
                </p>
                <p className="tw-mb-[11px]">
                    +82 (0)10 6610-4505 (9am - 5pm EST, Monday - Friday){" "}
                </p>
                <p className="tw-mb-[11px]">
                    <a
                        href="#!"
                        className={clsx(
                            "hover:tw-text-primary",
                            mode === "dark" && "tw-text-gray-400"
                        )}
                    >
                        justin.chachoe@gmail.com{" "}
                    </a>
                </p>
            </div>
            <Social
                color={mode === "dark" ? "white" : "light"}
                className="tw-gap-6.1 tw-mt-6.1"
            >
                <SocialLink href="https://facebook.com" label="Facebook lnik">
                    <i className="fab fa-facebook-square" />
                </SocialLink>
                <SocialLink href="https://twitter.com" label="twitter lnik">
                    <i className="fab fa-twitter" />
                </SocialLink>
                <SocialLink href="https://instagram.com" label="instagram lnik">
                    <i className="fab fa-instagram" />
                </SocialLink>
                <SocialLink href="https://linkedin.com" label="linkedin lnik">
                    <i className="fab fa-linkedin" />
                </SocialLink>
            </Social>
        </div>
    );
};

export default TextWidget;
