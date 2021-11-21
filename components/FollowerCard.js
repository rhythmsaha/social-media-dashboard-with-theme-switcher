const FollowerCard = ({ social, icon, username, followers, today }) => {
    return (
        <section className="relative p-8 rounded-lg overflow-hidden dark:text-desaturated-blue text-dark-grayish-blue  bg-light-grayish-blue dark:bg-dark-desaturated-blue text-center flex flex-col items-center">
            <div className={`absolute top-0 left-0 w-full h-1 ${social}`} />

            <div>
                <div className="flex items-center justify-center gap-2">
                    <img src={icon} alt={social} />
                    <span>{username}</span>
                </div>

                <div className="mt-4">
                    <h2 className="text-6xl font-bold text-dark-desaturated-blue dark:text-white">
                        {followers}
                    </h2>
                    <p className="text-sm tracking-[4px] text-dark-grayish-blue mt-1">
                        FOLLOWERS
                    </p>
                </div>
            </div>

            <div className="flex items-center mt-4 gap-1">
                <img
                    className="h-2 w-3"
                    src={
                        today?.type === "up"
                            ? "/images/icon-up.svg"
                            : "/images/icon-down.svg"
                    }
                    alt="up"
                />
                <span
                    className={`font-semibold text-sm ${
                        today?.type === "up"
                            ? "text-lime-green"
                            : "text-bright-red"
                    }`}
                >
                    {today?.value} Today
                </span>
            </div>
        </section>
    );
};

export default FollowerCard;
