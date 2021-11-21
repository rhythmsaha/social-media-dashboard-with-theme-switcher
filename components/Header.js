import { useTheme } from "next-themes";
const Header = () => {
    const { theme, setTheme } = useTheme();

    const changeThemeHandler = (e) => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    return (
        <div className="pt-4 pb-4 h-64 lg:h-72 bg-very-pale-blue dark:bg-very-dark-blue-2 rounded-b-2xl ">
            <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center  centwidth">
                <div className="border-b py-6 border-dark-desaturated-blue lg:border-none">
                    <h1 className="font-bold text-2xl text-very-dark-blue-1 dark:text-white">
                        Social Media Dashboard
                    </h1>
                    <p className="text-gray-500 dark:text-desaturated-blue font-semibold">
                        Total Followers" 23,004
                    </p>
                </div>

                <div className="flex items-center justify-between py-4 gap-4">
                    <p className="font-semibold text-dark-grayish-blue dark:text-desaturated-blue">
                        Dark Mode
                    </p>

                    <label
                        htmlFor="toggle"
                        className="inline-flex items-center cursor-pointer"
                    >
                        <div className="relative">
                            <button
                                type="checkbox"
                                id="toggle"
                                className="sr-only"
                                onClick={changeThemeHandler}
                            />
                            <div className="block  w-14 h-7 rounded-full bg-toggle dark:bg-gradient-to-r from-[#378fe6] to-[#3eda82]" />
                            <div
                                className={`absolute left-1 top-1 shadow bg-white w-5 h-5 rounded-full transition-all duration-200 dark:translate-x-7`}
                            ></div>
                        </div>
                    </label>
                </div>
            </header>
        </div>
    );
};

export default Header;
