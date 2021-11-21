const StatsCard = ({ item, value, icon, today }) => {
    return (
        <div className="flex flex-col p-6 dark:text-desaturated-blue text-dark-grayish-blue bg-light-grayish-blue dark:bg-dark-desaturated-blue gap-4 rounded-lg">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-dark-grayish-blue dark:text-desaturated-blue">
                    {item}
                </h1>
                <img src={icon} alt={item} className="object-contain" />
            </div>

            <div className="flex justify-between items-end">
                <p className="text-3xl font-bold text-dark-desaturated-blue dark:text-white">
                    {value}
                </p>

                <div className="flex items-center gap-1 whitespace-nowrap">
                    <img
                        className="h-1 w-2"
                        src={
                            today?.type === "up"
                                ? "/images/icon-up.svg"
                                : "/images/icon-down.svg"
                        }
                        alt="up"
                    />
                    <span
                        className={`font-semibold text-xs ${
                            today?.type === "up"
                                ? "text-lime-green"
                                : "text-bright-red"
                        }`}
                    >
                        {today?.value} Today
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
